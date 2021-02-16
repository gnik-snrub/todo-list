import { loadTodoPage } from '../control'
import { enablePageDetailEditing } from './generic'

function projectPageEvents(project, app) {
    enablePageDetailEditing(project, app)
    gotoTodoPage(project, app)
}

function gotoTodoPage(project, app) {
    let todos = document.querySelectorAll('.todo-title')
    todos.forEach(todo => todo.addEventListener('click', function() {
        let i = todo.parentElement.getAttribute('data-value')
        document.querySelector('.page-content').remove()
        loadTodoPage(project.getTodo(i), app)
    }));
}

function changeTodoPriority() {
    
}

function toggleTodoStatus() {

}

function removeTodo() {

}


export { projectPageEvents }