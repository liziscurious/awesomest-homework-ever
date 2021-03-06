const express = require('express');
const starWars = express.Router();

const Gif    = require('../models/gifs.js');

// Read
starWars.get('/', async (req, res) => {
  try {
    const gifs = await Gif.find();
    res.status( 200 ).json( gifs );
  } catch( err ){
    console.log ( err );
    res.status(400).json({ err: err.message });
  }
});

// Create
starWars.post('/', async (req, res) => {
  try {
    const newGif = await Gif.create(req.body);
    res.status( 200 ).json( newGif );
  } catch ( err ) {
    console.log( err );
    res.status(400).json({ err: err.message });
  }
});

// Update
starWars.put('/:id', async (req, res) => {
  try {
    const updatedGif = await Gif.findByIdAndUpdate(req.params.id, req.body);
    res.status( 200 ).json( info );
  } catch ( err ) {
    console.log( err );
    res.status( 400 ).json({ err: err.message });
  }
})

// Delete
starWars.delete('/delete/:id', async (req, res) => {
  try {
    const delGif = await Gif.findByIdAndRemove( req.params.id );
    res.status(200).json(delGif);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = starWars;
