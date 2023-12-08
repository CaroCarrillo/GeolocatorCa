const mongoose = require('mongoose');

const geolocationSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
});

const Geolocation = mongoose.model('Geolocation', geolocationSchema);

module.exports = Geolocation;
