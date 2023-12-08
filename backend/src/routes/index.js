const express = require('express');
const router = express.Router();
const geolocationsRouter = require('./geolocations');

router.use('/geolocations', geolocationsRouter);

module.exports = router;