import Units from "../units.model.js";

export const getAllUnitsService = async () => {
  try {
    const units = await Units.find();
    return units;
  } catch (error) {
    throw new Error("Error fetching all units: " + error.message);
  }
};
