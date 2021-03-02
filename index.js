#! /usr/bin/env node

const meow = require('meow');
const getQuote = require('./src/motivationQuote').getQuote;

const cli = meow(`
  Usage
    $ getQuote
  Examples
    $ getQuote
    Returns a random quote from our array
`);

console.log(getQuote(cli.input[0]));
