import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

interface RoleRouteProps {
  children: React.ReactNode;
  allowedRoles: ("TENANT" | "OWNER" | "ADMIN")[];
}

export const RoleRoute: React.FC<RoleRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
