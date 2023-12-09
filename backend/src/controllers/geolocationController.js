const Geolocation = require('../models/geolocation');
const validator = require('validator');


const addGeolocations = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    
    // Validate that the coordinates are in an acceptable range
    const isValidLatitude = validator.isFloat(latitude.toString(), { min: -90, max: 90 });
    const isValidLongitude = validator.isFloat(longitude.toString(), { min: -180, max: 180 });

    if (!isValidLatitude || !isValidLongitude) {
      return res.status(400).json({ error: 'Invalid coordinates' });
    }
  
    const newGeolocation = new Geolocation({ latitude, longitude });
    await newGeolocation.save();
    res.json({ message: 'Geolocation data successfully received' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error processing request' });
  }
};

const getGeolocations = async (req, res) => {
  try {
    const geolocations = await Geolocation.find();
    res.json(geolocations);
  } catch (error) {
    res.status(500).json({ error: 'Error obtaining geolocation data' });
  }
};

const deleteGeolocations = async (req, res) => {
  try {
    const { id } = req.params;
    await Geolocation.findByIdAndDelete(id);
    res.json({ message: 'Geolocation data successfully deleted' });
  } catch (error) {
    console.log(error)
    res.status(200).json({ error: 'Error deleting geolocation data' });
  }
};

module.exports = {
  addGeolocations,
  getGeolocations,
  deleteGeolocations,
};