const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

// POST /api/locations
router.post('/', async (req, res) => {
  try {
    const { userId, lat, lng } = req.body;
    const newLocation = new Location({ userId, lat, lng });
    await newLocation.save();
    res.status(201).json({ message: 'Location saved' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
