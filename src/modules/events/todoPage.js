import { loadTodoPage } from '../control'
import { enablePageDetailEditing } from './generic'

function todoPageEvents(todo, app) {
    enablePageDetailEditing(todo, app)
    enableNoteEditing(todo, app)
    addNoteButton(todo, app)
}

function enableNoteEditing(todo, app) {
    let notesList = document.querySelectorAll('.note')
    notesList.forEach(note => note.addEventListener('input', function() {
        let noteIndex = note.getAttribute('data-value')
        if (note.textContent == '') {
            todo.removeNote(noteIndex)
            document.querySelector('.page-content').remove()
            loadTodoPage(todo, app)
        } else {
            todo.notes[noteIndex] = note.textContent
        }
    }))
}

function addNoteButton(todo, app) {
    let addNote = document.getElementById('add-note')
    addNote.addEventListener('click', function() {
        todo.addNote('New note')
        document.querySelector('.page-content').remove()
        loadTodoPage(todo, app)
    })
}

export { todoPageEvents }