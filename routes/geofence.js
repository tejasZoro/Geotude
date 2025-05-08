const express = require('express');
const router = express.Router();
const Geofence = require('../models/Geofence');

// Get geofences by userId
router.get('/user/:userId', async (req, res) => {
    try {
        const geofences = await Geofence.find({ userId: req.params.userId });
        res.status(200).json(geofences);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching geofences', error: err });
    }
});

module.exports = router;
  