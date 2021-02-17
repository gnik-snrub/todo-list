import { loadTodoPage, loadProjectPage, storeData } from '../control'
import { enablePageDetailEditing } from './generic'

function projectPageEvents(project, app) {
    enablePageDetailEditing(project, app)
    gotoTodoPage(project, app)
    changeDueDate(project, app)
    changeTodoPriority(project, app)
    toggleTodoStatus(project, app)
    removeTodo(project, app)
    addTodoButton(project, app)
}

function gotoTodoPage(project, app) {
    let todos = document.querySelectorAll('.todo-title')
    todos.forEach(todo => todo.addEventListener('click', function() {
        let i = todo.parentElement.getAttribute('data-value')
        document.querySelector('.page-content').remove()
        loadTodoPage(project.getTodo(i), app)
    }));
}

function changeDueDate(project, app) {
    let dueDates = document.querySelectorAll('.todo-duedate')
    dueDates.forEach(date => date.addEventListener('input', function() {
        let todo = project.todos[date.parentElement.getAttribute('data-value')]
        todo.dueDate = new Date(date.valueAsDate)
        storeData(app)
    }))
}

function toggleTodoStatus(project, app) {
    let statusToggles = document.querySelectorAll('.todo-status')
    statusToggles.forEach(toggle => toggle.addEventListener('change', function() {
        let todo = project.todos[toggle.parentElement.getAttribute('data-value')]
        if (todo.status) {
            todo.status = false
            toggle.parentElement.firstChild.style.setProperty('text-decoration', '')
        } else {
            todo.status = true
            toggle.parentElement.firstChild.style.setProperty('text-decoration', 'line-through')
        }
        storeData(app)
    }))
}

function changeTodoPriority(project, app) {
    let priorityBoxes = document.querySelectorAll('.priority-box')
    priorityBoxes.forEach(box => box.addEventListener('click', function() {
        const index = box.parentElement.getAttribute('data-value')
        const classList = box.classList
        switch (true) {
            case classList.contains('priority-one'):
                box.classList.remove('priority-one')
                box.classList.add('priority-two')
                project.todos[index].priority = 2
                break
            case classList.contains('priority-two'):
                box.classList.remove('priority-two')
                box.classList.add('priority-three')
                project.todos[index].priority = 3
                break
            default: 
                box.classList.remove('priority-three')
                box.classList.add('priority-one')
                project.todos[index].priority = 1
        }
        storeData(app)
    }))
}

function removeTodo(project, app) {
    let removeButtons = document.querySelectorAll('.todo-remove')
    removeButtons.forEach(btn => btn.addEventListener('click', function() {
        let index = btn.parentElement.getAttribute('data-value')
        project.removeTodo(index)
        resetPageAndSaveData(project, app)
    }))
}

function addTodoButton(project, app) {
    let addTodo = document.getElementById('add-todo')
    addTodo.addEventListener('click', function() {
        project.addTodo('New todo! Click on me to change my name', 'And edit my details too', new Date(), 1)
        resetPageAndSaveData(project, app)
    })
}

function resetPageAndSaveData(project, app) {
    document.querySelector('.page-content').remove()
    loadProjectPage(project, app)
}

export { projectPageEvents }