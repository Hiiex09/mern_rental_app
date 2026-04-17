import { createPropertyServices } from "./services/createProperty.services.js";
import { getAllPropertyServices } from "./services/getProperty.services.js";

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
