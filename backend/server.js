require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  postalCode: { type: String, required: true },
  service: { type: String, required: true },
  photos: [{ type: String }], // Store file paths for uploaded photos
  createdAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Create uploads directory if it doesn't exist
const fs = require('fs');
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Routes
app.post('/api/appointments', upload.array('photos', 5), async (req, res) => {
  try {
    const { name, phone, email, postalCode, service } = req.body;
    
    // Validate phone number
    const phoneRegex = /^\+44[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ error: 'Invalid UK phone number' });
    }

    // Validate postal code
    const postalCodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$/i;
    if (!postalCodeRegex.test(postalCode)) {
      return res.status(400).json({ error: 'Invalid UK postal code' });
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim().toLowerCase() : '',
      postalCode: postalCode.trim().toUpperCase(),
      service: service.trim(),
    };

    // Get uploaded file paths
    const photos = req.files ? req.files.map(file => file.path) : [];

    const appointment = new Appointment({
      ...sanitizedData,
      photos
    });

    await appointment.save();
    res.status(201).json({ message: 'Appointment created successfully', appointment });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});