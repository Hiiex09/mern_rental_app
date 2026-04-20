import Units from "../units.model.js";
import { uploadToCloudinary } from "../../../utils/cloudinaryUpload.js";

export const updateUnitService = async (unitId, updateData) => {
  const {
    unitName,
    price,
    status,
    capacity,
    features,
    unitImages,
    propertyId,
  } = updateData;

  try {
    // If new images are provided, upload them
    let uploadedImageUrls = [];
    if (unitImages && Array.isArray(unitImages)) {
      for (const image of unitImages) {
        const result = await uploadToCloudinary(image.buffer, "units");
        uploadedImageUrls.push(result.secure_url);
      }
    }

    // Prepare update object
    const updateFields = {};
    if (unitName !== undefined) updateFields.unitName = unitName;
    if (price !== undefined) updateFields.price = price;
    if (status !== undefined) updateFields.status = status;
    if (capacity !== undefined) updateFields.capacity = capacity;
    if (features !== undefined) updateFields.features = features;
    if (propertyId !== undefined) updateFields.propertyId = propertyId;
    if (uploadedImageUrls.length > 0)
      updateFields.unitImages = uploadedImageUrls; // Replace or append? Assuming replace

    const updatedUnit = await Units.findByIdAndUpdate(unitId, updateFields, {
      new: true,
    });
    if (!updatedUnit) {
      throw new Error("Unit not found");
    }
    return updatedUnit;
  } catch (error) {
    throw new Error("Error updating unit: " + error.message);
  }
};
