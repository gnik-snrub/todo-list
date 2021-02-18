import { generateDetails, createPageContent, createAddButton } from './generic'

function renderProjectPage(proj) {
    let projectPage = createPageContent()

    generateDetails(projectPage, proj)
    populateTodoList(projectPage, proj)
}

function populateTodoList(page, project) {
    let todoList = document.createElement('div')
    todoList.classList.add('todo-list')
    page.appendChild(todoList)
    todoList.appendChild(createAddButton('todo'))

    for (let i = 0; i < project.todos.length; i++) {
        let newTodoElement = createTodoWrapper(todoList, i)
        let newTodo = project.getTodo(i)

        addTodoDetails(newTodoElement, newTodo)
        createTodoStatus(newTodoElement, newTodo)
        createTodoPriority(newTodoElement, newTodo)
        createRemoveTodoButton(newTodoElement, i)
    }
}

function createTodoWrapper(todoList, index) {
    let todoWrapper = document.createElement('div')
    todoWrapper.classList.add('todo')
    todoWrapper.setAttribute('data-value', index)
    todoList.appendChild(todoWrapper)

    return todoWrapper
}

function addTodoDetails(domElement, todo) {
    let todoTitle = document.createElement('div')
    todoTitle.classList.add('todo-title')
    todoTitle.textContent = `${todo.name}`
    domElement.appendChild(todoTitle)

    let todoDueDate = document.createElement('input')
    todoDueDate.classList.add('todo-duedate')
    todoDueDate.setAttribute('type', 'date')
    todoDueDate.valueAsDate = todo.dueDate
    domElement.appendChild(todoDueDate)
}

function createTodoStatus(domElement, todo) {
    let statusToggle = document.createElement('input')
    statusToggle.classList.add('todo-status')
    statusToggle.setAttribute('type', 'checkbox')
    if (todo.status) {
        statusToggle.checked = true
        domElement.firstChild.style.setProperty('text-decoration', 'line-through')
    }
    domElement.appendChild(statusToggle)
}

function createTodoPriority(domElement, todo) {
    let priorityBox = document.createElement('div')
    priorityBox.classList.add('priority-box')
    switch(todo.priority) {
        case 1:
            priorityBox.classList.add('priority-one')
            break
        case 2:
            priorityBox.classList.add('priority-two')
            break
        default:
            priorityBox.classList.add('priority-three')
    }
    domElement.appendChild(priorityBox)
}


function createRemoveTodoButton(domElement, index) {
    let removeButton = document.createElement('div')
    removeButton.classList.add('todo-remove')
    removeButton.textContent = 'X'
    removeButton.setAttribute('data-value', index)
    domElement.appendChild(removeButton)
}

export { renderProjectPage }