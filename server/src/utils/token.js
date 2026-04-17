import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  const access_token = jwt.sign({ userId }, process.env.ACCESS_TOKEN, {
    expiresIn: "15mins",
  });

  const refresh_token = jwt.sign({ userId }, process.env.REFRESH_TOKEN, {
    expiresIn: "7days",
  });

  return { access_token, refresh_token };
};
