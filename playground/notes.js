const fs = require('fs');

const getNotes = () => {
    try {
        const json = fs.readFileSync('notes-data.json');
        return JSON.parse(json)
    } catch (error) {
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
    const notes = getNotes();
    const note = {
        title,
        body
    }
    const duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

const getAll = () => {
    return getNotes();
}

const getNote = (title) => {
    const notes = getNotes();
    const note = notes.filter((note) => note.title === title)
    return note
}

const removeNote = (title) => {
    const notes = getNotes();
    const note = notes.filter((note) =>note.title !== title);
    saveNotes(note)
    return notes.length !== note.length;
}

const logData = (note) => {
    console.log('-----');
    console.log(note.title);
    console.log(note.body);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logData
}