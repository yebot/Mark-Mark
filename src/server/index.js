const express = require('express');
//const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const os = require('os');
const markRouter = require('./routes/mark');

// INITIATE EXPRESS
const app = express();

// CORS
//var corsOptions = {
//  origin: "http://localhost:8081"
//};
//app.use(cors(corsOptions));

// PARSERS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTES
app.use('/mark', markRouter);

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// 404
app.use((req, res) => res.status(404).send(`404 - This is not the page you're looking for...`));

// EXPRESS GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));