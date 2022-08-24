require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const swaggerDoc = require('./config/swaggerdoc');
const cors = require('./middlewares/cors');
const sequelize = require('./config/sequelize');

sequelize.sync().then(() => console.log('db is successed'));

const app = express();
const PORT = process.env.PORT;

swaggerDoc(app);

app.use([cors, bodyParser.json()]);

app.use('/', require('./routes'));
app.use('/links', require('./routes/links'));

app.use((_, res) => res.status(404).send('Route not found'));

app.listen(PORT, process.env.HOST, () => console.log(`Server has been started on ${PORT} port`));
