import { createPropertyServices } from "./services/createProperty.services.js";
import { getAllPropertyServices } from "./services/getProperty.services.js";
import { getPropertyServicesById } from "./services/getPropertyById.services.js";
import { updatePropertyServices } from "./services/updatePropert.service.js";

export const create_property = async (req, res) => {
  try {
    const { firstName, lastName, _id: userId } = req.user;

    const fullName = `${firstName} ${lastName}`.trim();

    const property = await createPropertyServices({
      ...req.body,
      postedBy: userId,
    });

    return res.status(201).json({
      message: "Property created successfully",
      data: property,
      postedBy: {
        name: fullName,
      },
    });
  } catch (error) {
    console.log("Error in Generating Property", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const get_all_properties = async (req, res) => {
  try {
    const { role, _id } = req.user;

    const data = await getAllPropertyServices(role, _id);

    return res.status(200).json({
      message: "Properties fetched successfully",
      data,
      requestedBy: { role },
    });
  } catch (error) {
    console.log("Error in get_all_properties:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const get_properties_by_id = async (req, res) => {
  try {
    const { id } = req.params;

    const fetchData = await getPropertyServicesById(id);

    if (!fetchData) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.status(200).json({
      message: "Data Fetched successfully",
      fetchData,
    });
  } catch (error) {
    console.error("Error in fetching data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const update_property = async (req, res) => {
  try {
    const { id } = req.params;
    const update_data = await updatePropertyServices(id, req.body);

    res.status(200).json({
      message: "Update Successful",
      update_data,
    });
  } catch (error) {
    if (error.message === "Property Not Found") {
      return res.status(404).json({ message: error.message });
    }

    console.error("Error in updating data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
