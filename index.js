require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API');
});


app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}`);
});