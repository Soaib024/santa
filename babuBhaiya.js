const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'ok'
    })
})

app.listen(port, () => {
    console.log(`Babu Bhaiya listening at http://localhost:${port}`);
  });