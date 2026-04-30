import { useProperties } from "../../hooks/useProperties";

const OwnerProperties = () => {
  const { properties, isLoading, error } = useProperties();

  if (isLoading) {
    return <p className="p-4">Loading properties...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-500">Failed to load properties</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {properties?.length === 0 && <p>No properties found.</p>}

      <div className="space-y-4">
        {properties?.map((property: any) => (
          <div key={property._id} className="border p-4 rounded-lg shadow">
            <p>
              <strong>Name:</strong> {property.name}
            </p>
            <p>
              <strong>Description:</strong> {property.description}
            </p>
            <p>
              <strong>Location:</strong> {property.location}
            </p>
            <p>
              <strong>Date:</strong> {new Date(property.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnerProperties;
