import { generateDetails, createPageContent, createAddButton } from './generic'

function renderTodoPage(todo) {
    let todoPage = createPageContent()

    generateDetails(todoPage, todo)
    populateNoteList(todoPage, todo)
}

function populateNoteList(page, todo) {
    let notesList = document.createElement('div')
    notesList.classList.add('note-list')
    page.appendChild(notesList)

    for (let i = 0; i < todo.notes.length; i++) {
        let newNoteElement = document.createElement('div')
        newNoteElement.classList.add('note')
        newNoteElement.setAttribute('data-value', i);
        notesList.appendChild(newNoteElement)

        let noteContent = document.createElement('span')
        noteContent.classList.add('note-text')
        noteContent.contentEditable = true
        noteContent.setAttribute('role', 'textbox')
        noteContent.textContent = todo.notes[i]
        newNoteElement.appendChild(noteContent)
    }
    notesList.appendChild(createAddButton('note'))
}

export { renderTodoPage }