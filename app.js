const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
    console.log(`Corriendo exitosamente en el puerto ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});