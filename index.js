require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const clientsRoutes = require('./routes/clientsRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());

app.use('/clients', clientsRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API');
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}`);
});