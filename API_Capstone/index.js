const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { data: null });
});

// API Integration Route - Fetch Joke
app.get('/joke', async (req, res) => {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
        res.render('index', { data: response.data });
    } catch (error) {
        console.error(error);
        res.render('index', { data: { error: 'Could not fetch a joke. Try again later.' } });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server started running on ${PORT}`);
});
