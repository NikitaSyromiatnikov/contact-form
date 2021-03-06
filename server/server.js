const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '..')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'index.html'));
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}\nOpen your browser on http://192.168.1.143:${port}`);
});