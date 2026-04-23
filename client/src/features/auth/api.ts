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
        const response = await apiClient.post('/login', data);
        return {
            user: {
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                role: response.data.role,
            },
        };
    },
    register: async (data: RegisterData) => {
        const response = await apiClient.post('/signup', data);
        return {
            user: response.data.user,
        };
    },
    getProfile: async () => {
        const response = await apiClient.get('/check-auth');
        return response.data;
    },
};