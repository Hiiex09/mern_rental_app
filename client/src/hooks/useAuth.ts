import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import {
    useLogin as useLoginMutation,
    useRegister as useRegisterMutation,
    useLogout as useLogoutMutation,
} from "../features/auth/queries";
import type { LoginData, RegisterData } from "../features/auth/api";

export const useAuthLogin = () => {
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();
    const mutation = useLoginMutation();

    const handleLogin = async (data: LoginData) => {
        const response = await mutation.mutateAsync(data);
        login(response.user);

        // Route to appropriate dashboard based on role
        const dashboardRoutes: Record<string, string> = {
            TENANT: "/dashboard",
            OWNER: "/owner/dashboard",
            ADMIN: "/admin/dashboard",
        };

        const redirectPath = dashboardRoutes[response.user.role] || "/dashboard";
        navigate(redirectPath);
        return response;
    };

    return {
        loginMutation: mutation,
        handleLogin,
    };
};

export const useAuthRegister = () => {
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();
    const mutation = useRegisterMutation();

    const handleRegister = async (data: RegisterData) => {
        const response = await mutation.mutateAsync(data);
        login(response.user);

        // Route to appropriate dashboard based on role
        const dashboardRoutes: Record<string, string> = {
            TENANT: "/dashboard",
            OWNER: "/owner/dashboard",
            ADMIN: "/admin/dashboard",
        };

        const redirectPath = dashboardRoutes[response.user.role] || "/dashboard";
        navigate(redirectPath);
        return response;
    };

    return {
        registerMutation: mutation,
        handleRegister,
    };
};

export const useAuthLogout = () => {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();
    const mutation = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await mutation.mutateAsync();
        } catch (error) {
            console.error("Logout request failed", error);
        } finally {
            logout();
            navigate("/login");
        }
    };

    return {
        handleLogout,
    };
};
