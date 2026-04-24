import { useAuthLogout } from "../../hooks/useAuth";

const OwnerDashboard: React.FC = () => {
  const { handleLogout } = useAuthLogout();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Owner Dashboard</h1>
      <p>Manage your properties and units here.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default OwnerDashboard;
