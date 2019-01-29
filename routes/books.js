const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', (req, res) => res.send('Grazinam visas knygas'));
router.get('/:id', (req, res) =>
  res.send('Grazinam pasirinkta knyga pagal ID')
);



router.post('/', (req, res) => {
  console.log('sukuriam nauja knyga');
  const newBook = new Book();

  newBook.title = req.body.title;
  newBook.author = req.body.author;
  newBook.year = req.body.year;
  newBook.category = req.body.category;
  newBook.bestSeller = req.body.bestSeller;

  newBook.save((error, book) => {

    if (error) {
      res.status(500).send(error.message)
    } else {
      console.log(book);
      res.status(201).send(book);
    }
  })
});


router.put('/:id', (req, res) =>
  res.send('atnaujinam pasirinkta knyga pagal ID')
);
router.delete('/:id', (req, res) =>
  res.send('Trinam pasirinkta knyga pagal ID')
);

module.exports = router;
