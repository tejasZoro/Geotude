const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

const geofenceRoutes = require('D:/geotude-backend/routes/geofence');
app.use('/api/geofences', geofenceRoutes);


// Routes
const locationRoutes = require('D:/geotude-backend/routes/LocationRoutes');
app.use('/api/locations', locationRoutes);

// Import user routes
const userRoutes = require('D:/geotude-backend/routes/UserRoutes'); // Import the new user routes
app.use('/api/users', userRoutes); // Add a new base route for users

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
