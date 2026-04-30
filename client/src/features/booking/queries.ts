import { useQuery } from "@tanstack/react-query";
import { bookingsApi } from "./api";

export const useGetAllBookingsQuery = () => {
    return useQuery({
        queryKey: ["bookings"],
        queryFn: bookingsApi.getAll,
    });
};