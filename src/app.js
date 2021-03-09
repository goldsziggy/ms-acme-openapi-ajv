const express = require('express');
const bodyParser = require('body-parser');
const swaggerValidation = require('openapi-validator-middleware');
const getUser = require('./routes/get-user');
const getSimple = require('./routes/get-simple');
const putUser = require('./routes/put-user');

const basePath = '/v1/acme';
const usersDB = [];

swaggerValidation.init('swagger.yml');
const app = express();

const api = express.Router();

app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log({ usersDB });
  req.db = usersDB;
  next();
});

// === START API ENDPOINT ===
api.get('/simple', swaggerValidation.validate, getSimple);
api.get('/user/:userId', swaggerValidation.validate, getUser);
api.put('/user', swaggerValidation.validate, putUser);

app.use(basePath, api);
// === END API ENDPOINTS  ===
//

app.use((err, req, res, next) => {
  if (err instanceof swaggerValidation.InputValidationError) {
    return res.status(400).json({ more_info: JSON.stringify(err.errors) });
  }

  console.log(err);

  return res.status(500).json({ err: err.message });
});

module.exports = app;
