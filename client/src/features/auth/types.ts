export interface User {
    id: string;
    email: string;
    role: 'tenant' | 'owner' | 'admin';
    name?: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}