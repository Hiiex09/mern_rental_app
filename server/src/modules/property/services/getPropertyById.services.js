import Property from "../property.model.js";

export const getPropertyServicesById = async (id) => {
  return await Property.findById(id);
};
