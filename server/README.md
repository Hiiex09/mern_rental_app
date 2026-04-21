# Rental App - Backend API

The Node.js/Express backend for the Rental Property Management System, providing RESTful APIs for property management, user authentication, and booking operations.

## 🚀 Features

- **RESTful API**: Clean, well-structured API endpoints
- **Authentication & Authorization**: JWT-based auth with role-based permissions
- **Database Integration**: MongoDB with Mongoose ODM
- **File Uploads**: Cloudinary integration for image storage
- **Data Validation**: Zod schemas for request validation
- **Security**: Password hashing, CORS, input sanitization

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Zod** - Schema validation
- **Cloudinary** - Image storage and management
- **Multer** - File upload handling

## 📁 Project Structure

```
src/
├── index.js                    # Server entry point
├── config/                     # Configuration files
│   ├── db.js                  # MongoDB connection
│   └── cloudinary.js          # Cloudinary configuration
├── middleware/                 # Express middleware
│   ├── auth.middleware.js     # JWT authentication
│   ├── authorizedRoles.middleware.js  # Role-based authorization
│   ├── upload.middleware.js   # File upload handling
│   └── validate.js            # Request validation
├── modules/                    # Feature modules
│   ├── auth/                  # Authentication module
│   │   ├── auth.controller.js # Route handlers
│   │   ├── auth.model.js      # MongoDB schema
│   │   ├── auth.route.js      # Route definitions
│   │   ├── auth.services.js   # Business logic
│   │   ├── auth.validate.js   # Validation schemas
│   ├── property/              # Property management
│   │   ├── property.controller.js
│   │   ├── property.model.js
│   │   ├── property.route.js
│   │   ├── property.validation.js
│   │   └── services/
│   │       ├── createProperty.services.js
│   │       ├── deletePropertyById.services.js
│   │       ├── getProperty.services.js
│   │       └── getPropertyById.services.js
│   ├── units/                 # Unit management
│   │   ├── units.controller.js
│   │   ├── units.model.js
│   │   ├── units.route.js
│   │   ├── units.validation.js
│   │   └── services/
│   │       ├── create.units.services.js
│   │       ├── deleteUnit.services.js
│   │       ├── getAllUnits.services.js
│   │       └── getUnitsByProperty.services.js
│   └── booking/               # Booking system
│       ├── booking.controller.js
│       ├── booking.model.js
│       ├── booking.route.js
│       ├── booking.service.js
│       └── booking.validation.js
└── utils/                     # Utility functions
    ├── cloudinaryUpload.js
    └── token.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/rental_app
   JWT_SECRET=your_super_secret_jwt_key_here
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

3. **Start the server**
   ```bash
   npm start
   ```

The server will start on `http://localhost:5000`

## 📡 API Endpoints

### Authentication Routes (`/api/v1/auth`)
- `POST /login` - User login
- `POST /register` - User registration
- `GET /profile` - Get current user profile (protected)

### Property Routes (`/api/v1/property`)
- `GET /` - Get all properties
- `GET /:id` - Get property by ID
- `POST /` - Create new property (owner/admin only)
- `PUT /:id` - Update property (owner/admin only)
- `DELETE /:id` - Delete property (owner/admin only)

### Units Routes (`/api/v1/units`)
- `GET /` - Get all units
- `GET /property/:propertyId` - Get units by property ID
- `GET /:id` - Get unit by ID
- `POST /` - Create new unit (owner/admin only)
- `PUT /:id` - Update unit (owner/admin only)
- `DELETE /:id` - Delete unit (owner/admin only)

### Booking Routes (`/api/v1/bookings`)
- `GET /` - Get user's bookings (tenant) or property bookings (owner)
- `GET /:id` - Get booking by ID
- `POST /` - Create new booking (tenant only)
- `PUT /:id` - Update booking status (owner/admin only)

## 🗄️ Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: 'tenant', 'owner', 'admin'),
  createdAt: Date,
  updatedAt: Date
}
```

### Property Model
```javascript
{
  title: String,
  description: String,
  address: String,
  images: [String], // Cloudinary URLs
  owner: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### Unit Model
```javascript
{
  property: ObjectId (ref: Property),
  title: String,
  description: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  available: Boolean,
  images: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Booking Model
```javascript
{
  unit: ObjectId (ref: Unit),
  tenant: ObjectId (ref: User),
  checkIn: Date,
  checkOut: Date,
  totalPrice: Number,
  status: String (enum: 'pending', 'confirmed', 'cancelled', 'completed'),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Authentication & Authorization

### JWT Authentication
- Access tokens are sent in the `Authorization` header: `Bearer <token>`
- Tokens expire after 24 hours
- Refresh tokens can be implemented for better security

### Role-based Access Control
- **Tenant**: Can view properties, make bookings, manage own profile
- **Owner**: Can manage own properties/units, view bookings
- **Admin**: Full access to all resources

## 📁 File Uploads

### Cloudinary Integration
- Images are uploaded to Cloudinary for storage
- Supported formats: JPG, PNG, WebP
- Automatic optimization and CDN delivery

### Upload Process
1. Client sends multipart/form-data with image files
2. Server validates file types and sizes
3. Images are uploaded to Cloudinary
4. URLs are stored in database
5. Old images are cleaned up on updates

## 🧪 Testing the API

### Using cURL
```bash
# Register a new user
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123","role":"tenant"}'

# Login
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### Using Postman/Insomnia
Import the following collection structure:
- Authentication: Login/Register/Profile
- Properties: CRUD operations
- Units: CRUD operations
- Bookings: CRUD operations

## 🚢 Deployment

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/rental_app
JWT_SECRET=your_production_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Deployment Steps
1. Set up MongoDB database
2. Configure Cloudinary account
3. Set environment variables
4. Deploy to hosting service (Heroku, Railway, AWS, etc.)
5. Update frontend API base URL

## 🔧 Development

### Available Scripts
```bash
npm start    # Start server with nodemon (development)
```

### Code Style
- Use ES6+ features
- Follow RESTful conventions
- Implement proper error handling
- Add JSDoc comments for complex functions

### Error Handling
- 400: Bad Request (validation errors)
- 401: Unauthorized (invalid/missing token)
- 403: Forbidden (insufficient permissions)
- 404: Not Found
- 500: Internal Server Error

## 📚 Related Documentation

- [Main Project README](../README.md) - Full project overview
- [Frontend Documentation](../client/README.md) - React app setup and usage