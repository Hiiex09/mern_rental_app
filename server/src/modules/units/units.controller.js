import Units from "./units.model.js";
import { createUnitService } from "./services/create.units.services.js";
import { getAllUnitsService } from "./services/getAllUnits.services.js";
import { getUnitsByPropertyService } from "./services/getUnitsByProperty.services.js";
import { updateUnitService } from "./services/updateUnit.services.js";
import { deleteUnitService } from "./services/deleteUnit.services.js";

export const generate_unit = async (req, res) => {
  try {
    const formData = {
      ...req.body,
      unitImages: req.files || [],
    };
    const newUnit = await createUnitService(formData);
    res
      .status(201)
      .json({ message: "Unit created successfully", unit: newUnit });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUnits = async (req, res) => {
  try {
    const units = await getAllUnitsService();
    res.status(200).json({ units });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUnitsByProperty = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const units = await getUnitsByPropertyService(propertyId);
    res.status(200).json({ units });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUnit = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = {
      ...req.body,
      unitImages: req.files || [],
    };
    const updatedUnit = await updateUnitService(id, updateData);
    res
      .status(200)
      .json({ message: "Unit updated successfully", unit: updatedUnit });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUnit = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUnit = await deleteUnitService(id);
    res
      .status(200)
      .json({ message: "Unit deleted successfully", unit: deletedUnit });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const browseAvailableUnits = async (req, res) => {
  try {
    const { propertyId } = req.params;

    // Get all available units for a property
    const units = await Units.find({
      propertyId,
      status: "available",
    })
      .select("unitName price capacity features unitImages")
      .populate("propertyId", "name location")
      .lean();

    res.status(200).json({
      message: "Available units fetched successfully",
      units,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
