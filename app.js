console.log('starting app.js');

const fs = require('fs');
const _= require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];

// console.log('Command: ', argv._[0]);
// console.log('Yargs: ', argv);

if(command === 'add') {
    let note = notes.addnote(argv.title, argv.body)
    if(note) {
        console.log('Note Created');
        notes.logNote(note)
    } else {
        console.log('Note title taken!')
    }
} else if(command === 'list') {
    notes.getAll()
} else if(command === 'read') {
    const note = notes.getNote(argv.title);
    if(note) {
        console.log('note found');
        notes.logNote(note)
    } else {
        console.log('note not found')
    }
} else if(command === 'remove') {
   const noteRemove = notes.removeNote(argv.title)
   const message = noteRemove ? 'Note was Removed' : 'Note not found!';
   console.log(message)
} else {
    console.log('Command not recognized!')
}
