import jwt from "jsonwebtoken";
import User from "../modules/auth/auth.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const access_token = req.cookies.access_token;
    const refresh_token = req.cookies.refresh_token;

    if (!access_token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No Token Provided" });
    }

    try {
      const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN);
      const user = await User.findById(decoded.userId).select("-password");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      req.user = user;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError" && refresh_token) {
        try {
          const decodedRefresh = jwt.verify(
            refresh_token,
            process.env.REFRESH_TOKEN,
          );

          const user = await User.findById(decodedRefresh.userId).select(
            "-password",
          );

          if (!user) {
            return res.status(404).json({ message: "User not found" });
          }

          const newAccessToken = jwt.sign(
            { userId: user._id },
            process.env.ACCESS_TOKEN,
            { expiresIn: "15m" },
          );

          res.cookie("access_token", newAccessToken, {
            maxAge: 15 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
          });

          req.user = user;
          next();
        } catch (refreshError) {
          return res.status(401).json({ message: "Invalid refresh token" });
        }
      } else {
        return res
          .status(401)
          .json({ message: "Invalid or expired access token" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
