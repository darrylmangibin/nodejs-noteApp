console.log('starting app.js');

const fs = require('fs');
const _= require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = process.argv[2];

console.log('Process: ', process.argv);
console.log('Yargs: ', argv);


if(command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title)
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('note recognize');
}