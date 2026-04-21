import apiClient from '../../services/apiClient';

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    email: string;
    password: string;
    role: 'tenant' | 'owner' | 'admin';
}

export const authApi = {
    login: async (data: LoginData) => {
        const response = await apiClient.post('/auth/login', data);
        return response.data;
    },
    register: async (data: RegisterData) => {
        const response = await apiClient.post('/auth/register', data);
        return response.data;
    },
    getProfile: async () => {
        const response = await apiClient.get('/auth/profile');
        return response.data;
    },
};