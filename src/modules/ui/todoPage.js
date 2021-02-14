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
    todoDetails.classList.add('project-details')
    page.appendChild(todoDetails)

    let todoTitle = document.createElement('div')
    todoTitle.classList.add('project-title')
    todoTitle.textContent = `${todo.name}`
    todoDetails.appendChild(todoTitle)

    let todoDescription = document.createElement('div')
    todoDescription.classList.add('project-description')
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
        newNoteElement.textContent = todo.notes[i]
        notesList.appendChild(newNoteElement)
    }
}

export { renderTodoPage }