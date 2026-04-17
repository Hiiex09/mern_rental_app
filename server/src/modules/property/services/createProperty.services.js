import Property from "../property.model.js";

export const createPropertyServices = async (data) => {
  if (!data.name || !data.description || !data.location) {
    throw new Error("All fields are required");
  }

  return await Property.create(data);
};
