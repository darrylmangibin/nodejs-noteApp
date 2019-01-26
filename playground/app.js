const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;

const notes = require('./notes');

const command = argv._[0];

switch (command) {
    case 'add':
        const noteAdd = notes.addNote(argv.title, argv.body);
        if(noteAdd) {
            console.log('Note Added!');
            notes.logData(noteAdd)
        } else {
            console.log('Note title taken')
        }
        break;

    case 'list':
        const allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s)`);
        allNotes.forEach((note) => {
            notes.logData(note)
        })
        break;

        case 'read':
        const noteRead = notes.getNote(argv.title);
        if(noteRead) {
            console.log('Note found!')
        } else {
            console.log('Note not found!');
        }
            break;

        case 'remove':
            const result = notes.removeNote(argv.title);
            if(result) {
                console.log('Note deleted')
            } else {
                console.log('Note not found!')
            }
            break;

    default:
        console.log('Command not recognized')
        break;
}