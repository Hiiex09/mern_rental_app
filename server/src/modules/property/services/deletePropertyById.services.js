import Property from "../property.model.js";

export const deletePropertyByIdService = async (id) => {
  return await Property.findByIdAndDelete(id);
};
