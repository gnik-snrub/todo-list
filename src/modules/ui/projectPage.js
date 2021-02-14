function renderProjectPage(proj) {
    let content = document.querySelector('.content')
    let projectPage = document.createElement('div')
    projectPage.classList.add('page-content')
    content.appendChild(projectPage)

    generateDetails(projectPage, proj)
    populateTodoList(projectPage, proj)
}

function generateDetails(page, project) {
    let projectDetails = document.createElement('div')
    projectDetails.classList.add('page-details')
    page.appendChild(projectDetails)

    let projectTitle = document.createElement('div')
    projectTitle.classList.add('page-title')
    projectTitle.textContent = `${project.name}`
    projectDetails.appendChild(projectTitle)

    let projectDescription = document.createElement('div')
    projectDescription.classList.add('page-description')
    projectDescription.textContent = `${project.description}`
    projectDetails.appendChild(projectDescription)
}

function populateTodoList(page, project) {
    let todoList = document.createElement('div')
    todoList.classList.add('todo-list')
    page.appendChild(todoList)

    for (let i = 0; i < project.todos.length; i++) {
        let newTodoElement = document.createElement('div')
        newTodoElement.classList.add('todo')
        newTodoElement.setAttribute('data-value', i);
        todoList.appendChild(newTodoElement)
        let newTodo = project.getTodo(i)
        addTodoDetails(newTodoElement, newTodo)
        setTodoPriority(newTodoElement, newTodo)
    }
}

function addTodoDetails(domElement, todo) {
    let todoTitle = document.createElement('div')
    todoTitle.classList.add('todo-title')
    todoTitle.textContent = `${todo.name}`
    domElement.appendChild(todoTitle)

    let todoDueDate = document.createElement('div')
    todoDueDate.classList.add('todo-duedate')
    todoDueDate.textContent = `${todo.dueDate}`
    domElement.appendChild(todoDueDate)
}

function setTodoPriority(domElement, todo) {
    switch(todo.priority) {
        case 1:
            domElement.classList.add('priority-one')
            domElement.classList.remove('priority-two')
            domElement.classList.remove('priority-three')
            break;
        case 2:
            domElement.classList.remove('priority-one')
            domElement.classList.add('priority-two')
            domElement.classList.remove('priority-three')
            break;
        case 3:
            domElement.classList.remove('priority-one')
            domElement.classList.remove('priority-two')
            domElement.classList.add('priority-three')
            break;
        default:
          
      }
}

export { renderProjectPage }