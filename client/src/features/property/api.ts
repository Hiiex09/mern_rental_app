import apiClient from "../../services/apiClient";

export const apiProperties = {
    getAll: async () => {
        const response = await apiClient.get("/property/");
        return response.data?.data ?? [];

    },
};