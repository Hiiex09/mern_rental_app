export interface User {
    id?: string;
    email?: string;
    role: 'tenant' | 'owner' | 'admin';
    firstName?: string;
    lastName?: string;
    name?: string;
}

export interface AuthResponse {
    user: User;
}