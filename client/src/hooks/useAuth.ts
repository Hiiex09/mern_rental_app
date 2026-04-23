import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useLogin as useLoginMutation, useRegister as useRegisterMutation } from "../features/auth/queries";
import type { LoginData, RegisterData } from "../features/auth/api";

export const useAuthLogin = () => {
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();
    const mutation = useLoginMutation();

    const handleLogin = async (data: LoginData) => {
        const response = await mutation.mutateAsync(data);
        login(response.user);
        navigate("/dashboard");
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
        navigate("/dashboard");
        return response;
    };

    return {
        registerMutation: mutation,
        handleRegister,
    };
};
