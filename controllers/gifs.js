const express = require('express');
const starWars = express.Router();

const Gif    = require('../models/gifs.js');

starWars.get('/', async (req, res) => {
  // try {
  //   const gifs = await Gif.find();
  //   res.status( 200 ).json( gifs );
  // } catch( err ){
  //   console.log ( err );
  //   res.status(400).json({ err: err.message });
  // }
});

starWars.post('/', async (req, res) => {

});

module.exports = starWars;
