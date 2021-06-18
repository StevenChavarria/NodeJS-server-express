const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World of express')
});

app.get('/about', (req, res) => {
    res.send('this is a small express project :) ')
});

app.get('/contact-us', (req, res) => {
    res.send('my email is abc@abc.com')
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

