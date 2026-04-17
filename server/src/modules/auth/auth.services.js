import { generateToken } from "../../utils/token.js";
import User from "./auth.model.js";
import bcrypt from "bcryptjs";

export const authServiceSignUp = async (data) => {
  const { firstName, lastName, address, email, mobile, password, role } = data;

  if (!firstName || !lastName || !address || !email || !mobile || !password) {
    throw new Error("All fields are required");
  }

  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("Email already exists");

  const mobileExists = await User.findOne({ mobile });
  if (mobileExists) throw new Error("Mobile already exists");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await User({
    firstName,
    lastName,
    address,
    email,
    mobile,
    password: hashPassword,
    role: role || "TENANT",
  });

  return newUser.save();
};

export const authServiceLogin = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Errro("User Credentials Invalid");
  }

  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    throw new Error("User Credentials Invalid");
  }

  return user;
};
