const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000, () => {
    console.log(`Corriendo exitosamente en el puerto ${ PORT }`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});