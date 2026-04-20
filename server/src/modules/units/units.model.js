import mongoose, { Schema } from "mongoose";
import { de } from "zod/v4/locales";

const unisSchema = new Schema(
  {
    unitName: { type: String, required: true },
    price: { type: Number, required: true },
    status: {
      type: String,
      enum: ["available", "occupied", "maintenance", "reserved"],
      required: true,
      default: "available",
    },
    capacity: { type: Number, required: true },
    features: [{ type: String }],
    unitImages: [{ type: String }],
    propertyId: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
  },
  { timestamps: true },
);

const Units = mongoose.model("Units", unisSchema);

export default Units;
