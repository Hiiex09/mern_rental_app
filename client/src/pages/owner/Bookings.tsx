import { useBookings } from "../../hooks/useBooking";

const OwnerBookings = () => {
  const { bookings, isLoading, error } = useBookings();
  console.log(bookings);

  if (isLoading) {
    return <p className="p-4">Loading bookings...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-500">Failed to load bookings</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bookings</h1>

      {bookings?.length === 0 && <p>No bookings found.</p>}

      <div className="space-y-4">
        {bookings?.map((booking: any) => (
          <div key={booking._id} className="border p-4 rounded-lg shadow">
            <p>
              <strong>Tenant:</strong> {booking.userId?.firstName} {booking.userId?.lastName}
            </p>
            <p>
              <strong>Property:</strong> {booking.propertyId?.name}
            </p>
            <p>
              <strong>Unit:</strong> {booking.unitId?.unitName}
            </p>
            <p>
              <strong>Status:</strong> {booking.status}
            </p>
            <p>
              <strong>Date:</strong> {new Date(booking.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnerBookings;
