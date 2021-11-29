const express = require('express');
//const morgan = require('morgan');
var cors = require('cors')
const path = require('path');

const app = express();


// Db connection
const { mongoose } = require('./database');

//middleware
app.use(cors())

// Settings 
app.set('port', process.env.PORT || 3001);

// MW
//app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/crudProd'));
app.use('/api/cashiers', require('./routes/crudCashier'));
app.use('/api/clients', require('./routes/crudClient'));

// SF
//console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));;

// Escuchando puerto
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

// app.get('/', (req, res) => {
//     res.send('Hola XD');
// });