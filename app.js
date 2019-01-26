console.log('starting app.js');

const fs = require('fs');
const _= require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
            .command('add', 'Add a new note', {
                title: titleOptions,
                body: bodyOptions
            })
            .command('list', 'List all notes')
            .command('read', 'Read a note', {
                title: titleOptions
            })
            .command('remove', 'Remove a note', {
                title: titleOptions
            })
            .help()
            .argv;

const command = argv._[0];

if(command === 'add') {
    let note = notes.addnote(argv.title, argv.body)
    if(note) {
        console.log('Note Created');
        notes.logNote(note)
    } else {
        console.log('Note title taken!')
    }
} else if(command === 'list') {
    const allNotes = notes.getAll()
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => {
        console.log(notes.logNote(note));
    })
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
