const bodyParser = require('body-parser');
const express = require('express');
const { route } = require('./routes/route');
const dotenv = require('dotenv');
const app = express();
require('./config/config')
dotenv.config();

app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.get('/', (req, res) => {
  console.log('API is up');
})
app.use('/book',route)

app.listen(8000, () => {
  console.log('server started');
})