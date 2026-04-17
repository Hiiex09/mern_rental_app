import mongoose, { Schema } from "mongoose";

export const propertySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    tags: { type: [String], default: [] },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Property = mongoose.model("Property", propertySchema);
export default Property;
