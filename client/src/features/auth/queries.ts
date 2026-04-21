import { useMutation, useQuery } from '@tanstack/react-query';
import { authApi } from './api';
import { queryKeys } from '../../lib/react-query/queryKeys';

export const useLogin = () => {
    return useMutation({
        mutationFn: authApi.login,
    });
};

export const useRegister = () => {
    return useMutation({
        mutationFn: authApi.register,
    });
};

export const useProfile = () => {
    return useQuery({
        queryKey: queryKeys.auth.user,
        queryFn: authApi.getProfile,
    });
};