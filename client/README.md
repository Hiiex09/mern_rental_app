# Rental App - Frontend

The React frontend for the Rental Property Management System, built with modern web technologies.

## 🚀 Features

- **Role-based UI**: Different interfaces for tenants, owners, and admins
- **Modern React**: Built with React 19, TypeScript, and Vite
- **State Management**: TanStack Query for server state, Zustand for client state
- **Responsive Design**: Tailwind CSS + DaisyUI for beautiful, responsive UI
- **Type Safety**: Full TypeScript coverage
- **Developer Experience**: Hot reload, ESLint, and modern tooling

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TanStack Query** - Server state management
- **React Router** - Client-side routing
- **Zustand** - Client state management
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS
- **DaisyUI** - Component library

## 📁 Project Structure

```
src/
├── app/                         # App-level setup
│   ├── App.tsx                 # Main component with providers
│   ├── routes.tsx              # React Router configuration
│   └── providers/              # Global context providers
│       ├── ReactQueryProvider.tsx
│       └── AuthProvider.tsx
├── pages/                      # Route-level pages (ROLE BASED)
│   ├── public/                 # Public pages
│   │   ├── Home.tsx
│   │   ├── Properties.tsx
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── tenant/                 # Tenant-specific pages
│   │   ├── Dashboard.tsx
│   │   ├── Bookings.tsx
│   │   └── Profile.tsx
│   ├── owner/                  # Owner-specific pages
│   │   ├── Dashboard.tsx
│   │   ├── Properties.tsx
│   │   ├── Units.tsx
│   │   └── Bookings.tsx
│   └── admin/                  # Admin-specific pages
│       ├── Dashboard.tsx
│       ├── Users.tsx
│       ├── Properties.tsx
│       └── Reports.tsx
├── components/                 # Reusable UI components
│   ├── ui/                     # Basic UI elements
│   ├── cards/                  # Card components
│   └── layouts/                # Layout components
├── features/                   # Feature-based business logic
│   ├── auth/                   # Authentication feature
│   │   ├── api.ts             # API calls
│   │   ├── queries.ts         # TanStack Query hooks
│   │   └── types.ts           # TypeScript types
│   ├── property/              # Property management
│   ├── unit/                  # Unit management
│   ├── booking/               # Booking system
│   └── user/                  # User management
├── lib/                        # Shared libraries
│   └── react-query/           # Query client configuration
│       ├── queryClient.ts
│       └── queryKeys.ts
├── services/                   # API services
│   └── apiClient.ts           # Axios instance
├── store/                     # Zustand stores
│   └── authStore.ts           # Authentication state
├── routes/                    # Route guards and protection
│   ├── ProtectedRoute.tsx
│   └── RoleRoute.tsx
├── hooks/                     # Custom React hooks
├── utils/                     # Utility functions
├── constants/                 # App constants
└── types/                     # Global TypeScript types
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Backend server running (see main README)

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## 📡 API Integration

The frontend communicates with the backend API through Axios. Key integrations:

- **Authentication**: Login/register with JWT token management
- **Properties**: CRUD operations with image uploads
- **Units**: Unit management within properties
- **Bookings**: Booking creation and status tracking

## 🔧 Development Guidelines

### Code Organization

- **Feature-based**: Each feature is self-contained with its own API, queries, and types
- **Separation of concerns**: Pages handle UI, features handle business logic
- **Reusable components**: Build reusable UI components in the components folder

### State Management

- **Server State**: TanStack Query for API data (properties, bookings, etc.)
- **Client State**: Zustand for UI state and authentication
- **Local State**: React useState for component-specific state

### Routing

- **Public routes**: Accessible without authentication
- **Protected routes**: Require authentication
- **Role-based routes**: Different access levels for different user roles

## 🧪 Testing

```bash
# Run ESLint
npm run lint

# Build check
npm run build
```

## 🚀 Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting service
```

## 📚 Related Documentation

- [Main Project README](../README.md) - Full project overview
- [Backend API Documentation](../server/README.md) - API endpoints and setup
  import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
