const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'job_tracker'
});

// Connect to database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/api/test', (req, res) => {
  res.send('API is working');
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
