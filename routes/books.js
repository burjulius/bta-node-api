const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Grazinam visas knygas'));
router.get('/:id', (req, res) =>
  res.send('Grazinam pasirinkta knyga pagal ID')
);
router.post('/', (req, res) => res.send('Sukuriam nauja knyga'));
router.put('/:id', (req, res) =>
  res.send('atnaujinam pasirinkta knyga pagal ID')
);
router.delete('/:id', (req, res) =>
  res.send('Trinam pasirinkta knyga pagal ID')
);

module.exports = router;
