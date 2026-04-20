import Units from "../units.model.js";

export const getUnitsByPropertyService = async (propertyId) => {
  try {
    const units = await Units.find({ propertyId });
    return units;
  } catch (error) {
    throw new Error("Error fetching units for property: " + error.message);
  }
};
