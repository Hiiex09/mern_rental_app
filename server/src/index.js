import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./config/db.js";
import authRoutes from "./modules/auth/auth.route.js";
import propertyRoutes from "./modules/property/property.route.js";
import unitsRoutes from "./modules/units/units.route.js";
import bookingRoutes from "./modules/booking/booking.route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/property", propertyRoutes);
app.use("/api/v1/units", unitsRoutes);
app.use("/api/v1/bookings", bookingRoutes);

const startServer = async () => {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

startServer();
