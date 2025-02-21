const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const db = require('./utils/db')

const usersRoutes = require('./routes/user.routes');
const prodcutRoutes = require('./routes/product.routes');


const app = express();

app.use(express.json());

app.use(cors())

db()

app.use('/api/usuarios', usersRoutes)
app.use('/api/productos', prodcutRoutes)


console.log("corriendo en el puerto: ");
app.listen(config.port, () => {
  console.log(`http://localhost:3000/`);
});




