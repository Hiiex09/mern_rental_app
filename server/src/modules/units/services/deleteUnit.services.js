import Units from "../units.model.js";

export const deleteUnitService = async (unitId) => {
  try {
    const deletedUnit = await Units.findByIdAndDelete(unitId);
    if (!deletedUnit) {
      throw new Error("Unit not found");
    }
    return deletedUnit;
  } catch (error) {
    throw new Error("Error deleting unit: " + error.message);
  }
};
