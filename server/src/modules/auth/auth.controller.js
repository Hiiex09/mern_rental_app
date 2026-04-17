import { generateToken } from "../../utils/token.js";
import * as AuthService from "./auth.services.js";

export const signup = async (req, res) => {
  try {
    const user = await AuthService.authServiceSignUp(req.body);

    const { access_token, refresh_token } = generateToken(user._id);

    res.cookie("access_token", access_token, {
      maxAge: 15 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    });

    res.cookie("refresh_token", refresh_token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development",
    });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
