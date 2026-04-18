import Property from "../property.model.js";

export const updatePropertyServices = async (id, formData) => {
  const { name, description, location } = formData;

  const data = await Property.findByIdAndUpdate(id, formData, {
    new: true,
    runValidators: true, // Good practice to ensure updates follow your schema
  });

  if (!data) {
    throw new Error("Property Not Found");
  }

  return data;
};
