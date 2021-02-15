import { loadTodoPage } from '../control'
import { enablePageDetailEditing } from './generic'

function projectPageEvents(project, app) {
    enablePageDetailEditing(project, app)
    todoElementEvents(project, app)
}

function todoElementEvents(project, app) {
    let todos = document.querySelectorAll('.todo')
    todos.forEach(todo => todo.addEventListener('click', function() {
        let i = todo.getAttribute('data-value')
        document.querySelector('.page-content').remove()
        loadTodoPage(project.getTodo(i), app)
    }));
}

export { projectPageEvents }