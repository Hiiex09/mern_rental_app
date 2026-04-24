import { useAuthLogout } from "../../hooks/useAuth";

const AdminDashboard = () => {
  const { handleLogout } = useAuthLogout();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Admin overview and management tools.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
