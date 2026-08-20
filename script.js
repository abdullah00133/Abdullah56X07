const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to handle JSON data
app.use(express.json());

// 1. Home Route (Root URL)
app.get('/', (req, res) => {
    res.send('<h1>Node.js Server is Running Successfully!</h1><p>Welcome to your first backend project.</p>');
});

// 2. API Route (To test JSON responses)
app.get('/api/status', (req, res) => {
    res.json({
        status: "success",
        message: "Server is online and working perfectly",
        code: 200
    });
});

// Start the server on Port 3000
app.listen(PORT, () => {
    console.log(`=============================================`);
    console.log(`🚀 Server successfully started on port ${PORT}`);
    console.log(`🔗 Open in your browser: http://localhost:${PORT}`);
    console.log(`=============================================`);
});
