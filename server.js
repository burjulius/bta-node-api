const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const databaseUser = 'bta-studentas';
const databasePassword = 'studentas123';
const databaseName = 'my-bta-database';
const databasePort = 57862;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// database config
mongoose.connect(
  `mongodb://${databaseUser}:${databasePassword}@ds057862.mlab.com:${databasePort}/${databaseName}`,
  { useNewUrlParser: true }
);

app.get('/', (req, res) => res.send('Viso gero BTA!'));

app.listen(port, () =>
  console.log(`BTA API application listening on port ${port}!`)
);
