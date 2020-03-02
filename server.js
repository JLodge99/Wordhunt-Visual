const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const solveRouter = require('./routes/solve-router')

app.use(bodyParser.json());

app.use('/api', solveRouter);

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

app.listen(8080, () => {
  console.log("Express server running on port 8080");
}); // start Node + Express server on port 8080