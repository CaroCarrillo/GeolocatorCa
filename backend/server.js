// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./src/routes')
const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Challenge', {
});

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
