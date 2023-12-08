const express = require('express');
const router = express.Router();
const geolocationController = require('../controllers/geolocationController');

router.post('/AddGeolocations', geolocationController.addGeolocations);
router.get('/GetGeolocations', geolocationController.getGeolocations);
router.delete('/DeleteGeolocations/:id', geolocationController.deleteGeolocations);

module.exports = router;