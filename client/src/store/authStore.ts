import { create } from 'zustand';

interface User {
    id?: string;
    email?: string;
    role: 'tenant' | 'owner' | 'admin';
    firstName?: string;
    lastName?: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    login: (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        set({ user, isAuthenticated: true });
    },
    logout: () => {
        localStorage.removeItem('user');
        set({ user: null, isAuthenticated: false });
    },
}));