const express = require('express');
const router = express.Router();

const Gif = require('../models/gifs.js');

const newGifs = [
  { title: 'Lando',
  url: 'https://media.giphy.com/media/3ornk7TgUdhjhTYgta/giphy.gif'},

  { title: 'Darth Vader',
  url: 'https://media.giphy.com/media/ZX6NHzA9Fcddm/giphy.gif'},

  { title: 'Trap',
  url: 'https://media.giphy.com/media/8McNH1aXZnVyE/giphy.gif'},

  { title: 'BB-8',
  url: 'https://media.giphy.com/media/5xaOcLOqNmWHaLeB14I/giphy.gif'},

  { title: 'Yoda',
  url: 'https://media.giphy.com/media/yDYAHbqe5DfyM/giphy.gif'},

  { title: 'Chewbacca',
  url: 'https://media.giphy.com/media/5tRGwBkWx8Vt6/giphy.gif'}

];

router.get('/', (req, res) => {
  Gif.create(newGifs, function(err) {
    if (err) {
      console.log(err);
      res.send('Error seeding database');
    } else {
      console.log('SEED EXECUTED');
      res.redirect('/gifs');
    }
  });
});

router.get('/dropit', ( req, res ) => {
	Gif.collection.drop();
	console.log ('collection dropped');
	res.redirect('/gifs');
});

module.exports = router;
