const connectToMongo = require('./db');
const express = require('express');
const app = express();

app.use(express.json());

connectToMongo();


//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})