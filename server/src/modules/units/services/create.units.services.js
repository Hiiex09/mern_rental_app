import Units from "../units.model.js";
import { uploadToCloudinary } from "../../../utils/cloudinaryUpload.js";

export const createUnitService = async (formData) => {
  const {
    unitName,
    price,
    status,
    capacity,
    features,
    unitImages,
    propertyId,
  } = formData;

  try {
    // Upload images to Cloudinary and collect URLs
    const uploadedImageUrls = [];
    if (unitImages && Array.isArray(unitImages)) {
      for (const image of unitImages) {
        const result = await uploadToCloudinary(image.buffer, "units"); // Assuming image is a file object with buffer
        uploadedImageUrls.push(result.secure_url);
      }
    }

    const newUnit = new Units({
      unitName,
      price,
      status,
      capacity,
      features,
      unitImages: uploadedImageUrls, // Use uploaded URLs
      propertyId,
    });
    await newUnit.save();
    return newUnit;
  } catch (error) {
    throw new Error("Error creating unit: " + error.message);
  }
};
