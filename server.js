const express = require('express');
const cors = require('cors');

// Create express app
const app = express();
const PORT = 80;

// Middleware
app.use(cors());
app.use(express.json());



// GET endpoint to fetch all items
app.get('/', async (req, res) => {
  res.send('hi hello')
});

// https://github.com/CumulusCycles/AWS_Terraform_CI_CD_demo/blob/main/src/modules/tf-state/main.tfPOST endpoint to create a new item

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
