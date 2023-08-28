const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the directory where the script is located
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
