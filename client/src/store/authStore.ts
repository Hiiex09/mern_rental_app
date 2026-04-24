import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
    id?: string;
    email?: string;
    role: 'TENANT' | 'OWNER' | 'ADMIN';
    firstName?: string;
    lastName?: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            login: (user) => {
                set({ user, isAuthenticated: true });
            },
            logout: () => {
                set({ user: null, isAuthenticated: false });
            },
        }),
        {
            name: 'auth-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
);