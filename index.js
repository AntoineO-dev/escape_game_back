require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const clientsRoutes = require('./routes/clientsRoutes');
const paymentsRoutes = require('./routes/paymentsRoutes');
const reservationsRoutes = require('./routes/reservationsRoutes');
const escape_gamesRoutes = require('./routes/escape_gamesRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());

app.use('/clients', clientsRoutes);
app.use('/escape_games', escape_gamesRoutes);
app.use('/payments', paymentsRoutes);
app.use('/reservations', reservationsRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API');
});


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}`);
});