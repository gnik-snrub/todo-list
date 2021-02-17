import { loadTodoPage, loadProjectPage } from '../control'
import { enablePageDetailEditing } from './generic'

function projectPageEvents(project, app) {
    enablePageDetailEditing(project, app)
    gotoTodoPage(project, app)
    changeTodoPriority(project)
    toggleTodoStatus(project)
    removeTodo(project, app)
}

function gotoTodoPage(project, app) {
    let todos = document.querySelectorAll('.todo-title')
    todos.forEach(todo => todo.addEventListener('click', function() {
        let i = todo.parentElement.getAttribute('data-value')
        document.querySelector('.page-content').remove()
        loadTodoPage(project.getTodo(i), app)
    }));
}

function changeDueDate() {

}

function toggleTodoStatus(project) {
    let statusToggles = document.querySelectorAll('.todo-status')
    statusToggles.forEach(box => box.addEventListener('change', function() {
        let todo = project.todos[box.parentElement.getAttribute('data-value')]
        if (todo.status) {
            todo.status = false
            box.parentElement.firstChild.style.setProperty('text-decoration', '')
        } else {
            todo.status = true
            box.parentElement.firstChild.style.setProperty('text-decoration', 'line-through')
        }
    }))
}

function changeTodoPriority(project) {
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
    }))
}

function removeTodo(project, app) {
    let removeButtons = document.querySelectorAll('.todo-remove')
    removeButtons.forEach(btn => btn.addEventListener('click', function() {
        let index = btn.parentElement.getAttribute('data-value')
        project.removeTodo(index)
        document.querySelector('.page-content').remove()
        loadProjectPage(project, app)
    }))
}


export { projectPageEvents }