const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// MongoDB connection
// *** UNCOMMENT ONCE DB CONFIGURED ***
// connectDB();

app.use(express.json());

app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));