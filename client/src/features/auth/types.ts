export interface User {
    id?: string;
    email?: string;
    role: 'TENANT' | 'OWNER' | 'ADMIN';
    firstName?: string;
    lastName?: string;
    name?: string;
}

export interface AuthResponse {
    user: User;
}