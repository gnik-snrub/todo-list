function renderTodoPage(todo) {
    let content = document.querySelector('.content')
    let todoPage = document.createElement('div')
    todoPage.classList.add('page-content')
    content.appendChild(todoPage)

    generateDetails(todoPage, todo)
    populateNoteList(todoPage, todo)
}

function generateDetails(page, todo) {
    let todoDetails = document.createElement('div')
    todoDetails.classList.add('page-details')
    page.appendChild(todoDetails)

    let todoTitle = document.createElement('div')
    todoTitle.classList.add('page-title')
    todoTitle.textContent = `${todo.name}`
    todoDetails.appendChild(todoTitle)

    let todoDescription = document.createElement('div')
    todoDescription.classList.add('page-description')
    todoDescription.textContent = `${todo.description}`
    todoDetails.appendChild(todoDescription)
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

        let noteContent = document.createElement('div')
        noteContent.classList.add('note-text')
        noteContent.textContent = todo.notes[i]
        newNoteElement.appendChild(noteContent)
    }
}

export { renderTodoPage }