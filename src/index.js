const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const db = require('./utils/db')

const usersRoutes = require('./routes/user.routes');
const bodyParser = require('body-parser');
const router = require('./routes/user.routes');


const app = express();

app.use(bodyParser.json());
app.use(cors());
// app.use(express.json());

db()

app.use('/api/usuarios', usersRoutes)


console.log("corriendo en el puerto: ");
app.listen(config.port, () => {
  console.log(`http://localhost:3000/`);
});




