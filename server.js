const express = require('express');
const cors = require('cors');

// Create express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());



// GET endpoint to fetch all items
app.get('/', async (req, res) => {
  res.send('hi hello')
});

// POST endpoint to create a new item

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
