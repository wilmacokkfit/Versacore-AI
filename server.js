const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Ecosystems API Endpoint
app.get('/api/ecosystems', (req, res) => {
    res.json({ message: 'Fetching ecosystems...' });
});

// Modules API Endpoint
app.get('/api/modules', (req, res) => {
    res.json({ message: 'Fetching modules...' });
});

// Simulations API Endpoint
app.get('/api/simulations', (req, res) => {
    res.json({ message: 'Fetching simulations...' });
});

// Exports API Endpoint
app.get('/api/exports', (req, res) => {
    res.json({ message: 'Fetching exports...' });
});

// Marketplace API Endpoint
app.get('/api/marketplace', (req, res) => {
    res.json({ message: 'Fetching marketplace items...' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
