import { loadTodoPage } from '../control'

function projectPageEvents(project) {
    let todos = document.querySelectorAll('.todo')
    todos.forEach(todo => todo.addEventListener('click', function() {
        let i = todo.getAttribute('data-value')
        document.querySelector('.page-content').remove()
        loadTodoPage(project.getTodo(i))
    }));
}

export { projectPageEvents }