import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./config/db.js";
import authRoutes from "./modules/auth/auth.route.js";
import propertyRoutes from "./modules/property/property.route.js";
import unitsRoutes from "./modules/units/units.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/property", propertyRoutes);
app.use("/api/v1/units", unitsRoutes);

const startServer = async () => {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

startServer();
