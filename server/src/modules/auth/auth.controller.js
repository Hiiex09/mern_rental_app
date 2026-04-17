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

export const login = async (req, res) => {
  try {
    const userLogin = await AuthService.authServiceLogin(req.body);

    const { access_token, refresh_token } = generateToken(userLogin._id);

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

    return res.status(200).json({
      message: "Logging in Successfully",
      firstName: userLogin.firstName,
      lastName: userLogin.lastName,
      role: userLogin.role,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("access_token", "", { maxAge: 0 });
    res.cookie("refresh_token", "", { maxAge: 0 });
    res.status(200).json({
      message: "Logged Out Successfully",
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const checkAuth = (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    });
  } catch (error) {
    console.log("Error in checkAuth Controller");
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
