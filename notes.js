
const fs = require('fs');

const fetchNotes = () => {
     try {
       const notesString = fs.readFileSync('notes-data.json')
       return JSON.parse(notesString)
    } catch (error) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addnote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    }

    const duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note
    }
}

const getAll = () => {
    
}

const getNote = (title) => {
    console.log('getting note', title)
}

const removeNote = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

module.exports = {
    addnote,
    getAll,
    getNote,
    removeNote
}