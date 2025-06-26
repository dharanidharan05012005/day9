require('dotenv').config(); // Make sure this is at the TOP

const express = require('express');
const server = express();

const mongoose = require('mongoose');

// DEBUG LINE: Check if the URI is being loaded
const MongoUri = process.env.Mongo_uri;
console.log('Loaded Mongo URI:', MongoUri); // You should see the full URI here

mongoose.connect(MongoUri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('MongoDB connection error:', error));

server.get('/', (req, res) => {
  res.send('Hello from Express');
});

server.listen(3011, () => {
  console.log('Server listening at http://localhost:3011');
});
