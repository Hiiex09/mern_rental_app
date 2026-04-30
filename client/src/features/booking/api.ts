import apiClient from "../../services/apiClient";



export const bookingsApi = {
    getAll: async () => {
        const response = await apiClient.get("/bookings");
        return response.data.bookings;
    },
};