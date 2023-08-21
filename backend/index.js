const connectToMongo = require('./db');
const express = require('express');
const app = express()
var cors = require('cors')

app.use(express.json());

connectToMongo();

app.use(cors())
app.use(express.json())


//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(5000, () => {
  console.log(`iNotebook listening on port 5000`)
})