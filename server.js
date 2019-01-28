const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// database config
mongoose.connect(
  'mongodb://bta-studentas:studentas123@ds057862.mlab.com:57862/my-bta-database',
  { useNewUrlParser: true }
);

app.get('/', (req, res) => res.send('Viso gero BTA!'));

app.listen(port, () =>
  console.log(`BTA API application listening on port ${port}!`)
);
