const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Example endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello, this is your Express API with CORS!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
