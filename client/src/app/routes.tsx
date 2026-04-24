import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/public/Home";
import Properties from "../pages/public/Properties";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import TenantDashboard from "../pages/tenant/Dashboard";
import TenantBookings from "../pages/tenant/Bookings";
import TenantProfile from "../pages/tenant/Profile";
import OwnerDashboard from "../pages/owner/Dashboard";
import OwnerProperties from "../pages/owner/Properties";
import OwnerUnits from "../pages/owner/Units";
import OwnerBookings from "../pages/owner/Bookings";
import AdminDashboard from "../pages/admin/Dashboard";
import AdminUsers from "../pages/admin/Users";
import AdminProperties from "../pages/admin/Properties";
import AdminReports from "../pages/admin/Reports";
import { ProtectedRoute } from "../routes/ProtectedRoute";
import { RoleRoute } from "../routes/RoleRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/properties",
    element: <Properties />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["TENANT", "OWNER", "ADMIN"]}>
          <TenantDashboard />
        </RoleRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/tenant/bookings",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["TENANT"]}>
          <TenantBookings />
        </RoleRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/tenant/profile",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["TENANT"]}>
          <TenantProfile />
        </RoleRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/owner/dashboard",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["OWNER"]}>
          <OwnerDashboard />
        </RoleRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/owner/properties",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["OWNER"]}>
          <OwnerProperties />
        </RoleRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/owner/units",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["OWNER"]}>
          <OwnerUnits />
        </RoleRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/owner/bookings",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["OWNER"]}>
          <OwnerBookings />
        </RoleRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["ADMIN"]}>
          <AdminDashboard />
        </RoleRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/users",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["ADMIN"]}>
          <AdminUsers />
        </RoleRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/properties",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["ADMIN"]}>
          <AdminProperties />
        </RoleRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/reports",
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={["ADMIN"]}>
          <AdminReports />
        </RoleRoute>
      </ProtectedRoute>
    ),
  },
]);
