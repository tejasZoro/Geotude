const mongoose = require('mongoose');

const geofenceSchema = new mongoose.Schema({
    name: String,
    coordinates: {
        latitude: Number,
        longitude: Number,
        radius: Number
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Geofence', geofenceSchema);
