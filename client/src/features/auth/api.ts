import apiClient from '../../services/apiClient';

export interface LoginData {
    email: string;
    password: string;
}

export interface RegisterData {
    firstName: string;
    lastName: string;
    address: string;
    mobile: string;
    email: string;
    password: string;
    role: 'TENANT' | 'OWNER' | 'ADMIN';
    profile?: string;
}

export const authApi = {
    login: async (data: LoginData) => {
        const response = await apiClient.post('/login', data);
        return {
            user: {
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                role: response.data.role,
                email: data.email,
            },
        };
    },
    register: async (data: RegisterData) => {
        const response = await apiClient.post('/signup', data);
        return {
            user: response.data.user,
        };
    },
    logout: async () => {
        await apiClient.post('/logout');
    },
    getProfile: async () => {
        const response = await apiClient.get('/check-auth');
        return response.data;
    },
};