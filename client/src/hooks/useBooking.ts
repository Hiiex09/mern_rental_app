import { useGetAllBookingsQuery } from "../features/booking/queries";


export const useBookings = () => {
    const bookingsQuery = useGetAllBookingsQuery();

    return {
        bookings: bookingsQuery.data,
        isLoading: bookingsQuery.isLoading,
        error: bookingsQuery.error,
    };
};