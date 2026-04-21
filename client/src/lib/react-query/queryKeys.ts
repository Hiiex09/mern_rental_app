export const queryKeys = {
    auth: {
        user: ['auth', 'user'] as const,
    },
    properties: {
        all: ['properties'] as const,
        detail: (id: string) => ['properties', id] as const,
    },
    units: {
        all: ['units'] as const,
        byProperty: (propertyId: string) => ['units', 'property', propertyId] as const,
        detail: (id: string) => ['units', id] as const,
    },
    bookings: {
        all: ['bookings'] as const,
        user: (userId: string) => ['bookings', 'user', userId] as const,
    },
    users: {
        all: ['users'] as const,
    },
};