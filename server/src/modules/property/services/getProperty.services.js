import Property from "../property.model.js";

export const getAllPropertyServices = async (role, userId) => {
  let filter = {};

  // If not admin → only own properties
  if (role !== "ADMIN") {
    filter.postedBy = userId;
  }

  return await Property.find(filter)
    .populate("postedBy", "firstName lastName email role")
    .sort({ createdAt: -1 });
};
