# Rental Property Management System

A full-stack web application for managing rental properties, built with modern technologies. This system allows property owners to list their properties and units, tenants to browse and book accommodations, and administrators to oversee the entire platform.

## 🚀 Features

### User Roles & Permissions

- **Tenants**: Browse properties, view units, make bookings, manage profile
- **Owners**: Manage properties and units, view bookings, track earnings
- **Admins**: Full system oversight, user management, property approvals, analytics

### Core Functionality

- 🔐 **Authentication & Authorization**: JWT-based auth with role-based access control
- 🏠 **Property Management**: Create, update, delete properties with image uploads
- 🏢 **Unit Management**: Manage individual units within properties
- 📅 **Booking System**: Complete booking workflow with status tracking
- 🖼️ **Image Management**: Cloudinary integration for property photos
- 📊 **Dashboard Analytics**: Role-specific dashboards with key metrics

## 🛠️ Tech Stack

### Frontend

- **React 19** with TypeScript
- **Vite** for build tooling
- **TanStack Query** for server state management
- **React Router** for navigation
- **Zustand** for client state management
- **Axios** for API communication
- **Tailwind CSS + DaisyUI** for styling

### Backend

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Zod** for validation
- **Cloudinary** for image storage
- **Multer** for file uploads

## 📁 Project Structure

```
rental_app/
├── client/                          # React Frontend
│   ├── src/
│   │   ├── app/                     # App-level setup
│   │   │   ├── App.tsx             # Main component
│   │   │   ├── routes.tsx          # React Router config
│   │   │   └── providers/          # Global providers
│   │   ├── pages/                  # Route-level pages (ROLE BASED)
│   │   │   ├── public/             # Public pages (Home, Properties, Login, Register)
│   │   │   ├── tenant/             # Tenant pages (Dashboard, Bookings, Profile)
│   │   │   ├── owner/              # Owner pages (Dashboard, Properties, Units, Bookings)
│   │   │   └── admin/              # Admin pages (Dashboard, Users, Properties, Reports)
│   │   ├── components/             # Reusable UI components
│   │   │   ├── ui/                 # Basic UI elements (buttons, inputs)
│   │   │   ├── cards/              # Card components (PropertyCard, UnitCard)
│   │   │   └── layouts/            # Layout components (Navbar, Sidebar)
│   │   ├── features/               # Feature-based logic
│   │   │   ├── auth/               # Authentication feature
│   │   │   ├── property/           # Property management
│   │   │   ├── unit/               # Unit management
│   │   │   ├── booking/            # Booking system
│   │   │   └── user/               # User management
│   │   ├── lib/                    # Shared libraries
│   │   │   └── react-query/        # Query client and keys
│   │   ├── services/               # API services
│   │   ├── store/                  # Zustand stores
│   │   ├── routes/                 # Route guards
│   │   ├── hooks/                  # Custom React hooks
│   │   ├── utils/                  # Utility functions
│   │   ├── constants/              # App constants
│   │   └── types/                  # TypeScript type definitions
│   ├── package.json
│   └── vite.config.ts
│
├── server/                          # Node.js Backend
│   ├── src/
│   │   ├── index.js                # Server entry point
│   │   ├── config/                 # Configuration files
│   │   │   ├── db.js              # Database connection
│   │   │   └── cloudinary.js      # Cloudinary config
│   │   ├── middleware/             # Express middleware
│   │   │   ├── auth.middleware.js
│   │   │   ├── authorizedRoles.middleware.js
│   │   │   └── upload.middleware.js
│   │   └── modules/                # Feature modules
│   │       ├── auth/               # Authentication module
│   │       ├── property/           # Property module
│   │       ├── units/              # Units module
│   │       └── booking/            # Booking module
│   ├── package.json
│   └── .env                        # Environment variables
│
└── README.md                        # This file
```

## 🏗️ Architecture

### Frontend Architecture

- **Feature-based organization**: Each feature (auth, property, etc.) is self-contained
- **Separation of concerns**: Pages, components, services, and state management are clearly separated
- **Type safety**: Full TypeScript coverage for better developer experience
- **Modern React patterns**: Hooks, context, and modern state management

### Backend Architecture

- **Modular structure**: Each feature has its own module with routes, controllers, models, and services
- **Middleware-based**: Authentication, authorization, and file upload middleware
- **RESTful API**: Clean REST endpoints with proper HTTP methods
- **Data validation**: Zod schemas for request validation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd rental_app
   ```

2. **Setup Backend**

   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the server directory:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/rental_app
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

   Start the backend:

   ```bash
   npm start
   ```

3. **Setup Frontend**

   ```bash
   cd ../client
   npm install
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📡 API Endpoints

### Authentication

- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `GET /api/v1/auth/profile` - Get user profile

### Properties

- `GET /api/v1/property` - Get all properties
- `POST /api/v1/property` - Create property (owner/admin)
- `PUT /api/v1/property/:id` - Update property
- `DELETE /api/v1/property/:id` - Delete property

### Units

- `GET /api/v1/units` - Get all units
- `GET /api/v1/units/property/:propertyId` - Get units by property
- `POST /api/v1/units` - Create unit
- `PUT /api/v1/units/:id` - Update unit
- `DELETE /api/v1/units/:id` - Delete unit

### Bookings

- `GET /api/v1/bookings` - Get user bookings
- `POST /api/v1/bookings` - Create booking
- `PUT /api/v1/bookings/:id` - Update booking status

## 🔧 Development

### Available Scripts

#### Client

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

#### Server

```bash
npm start        # Start server with nodemon
```

### Code Quality

- **ESLint**: Configured for React/TypeScript
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting (if configured)

## 🧪 Testing

### Frontend Testing

```bash
# Add testing framework (Vitest, Jest, etc.)
npm test
```

### API Testing

Use tools like Postman or Insomnia to test API endpoints.

## 🚢 Deployment

### Frontend Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting service (Vercel, Netlify, etc.)
```

### Backend Deployment

```bash
# Deploy to services like Heroku, Railway, or VPS
# Ensure environment variables are set
# Database should be accessible from deployment environment
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

For questions or support, please open an issue in the repository.

## 🔄 Future Enhancements

- [ ] Real-time notifications
- [ ] Payment integration
- [ ] Advanced search and filtering
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Analytics dashboard
- [ ] Email notifications
- [ ] Review and rating system
