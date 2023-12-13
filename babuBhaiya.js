const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');



const app = express();
app.use(express.static(__dirname + '/frontend'));

const port = 3000;

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/index.html'));
})

app.listen(port, () => {
    console.log(`Babu Bhaiya listening at http://localhost:${port}`);
  });