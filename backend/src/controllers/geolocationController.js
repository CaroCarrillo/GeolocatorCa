const Geolocation = require('../models/geolocation');

const addGeolocations = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const newGeolocation = new Geolocation({ latitude, longitude });
    await newGeolocation.save();
    res.json({ message: 'Geolocation data successfully received' });
  } catch (error) {
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