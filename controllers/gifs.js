const express = require('express');
const starWars = express.Router();

const Gif    = require('../models/gifs.js');

starWars.get('/', async (req, res) => {

});

starWars.post('/', async (req, res) => {

});

module.exports = starWars;
