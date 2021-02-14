import { sidebarEvents } from "./sidebar"
import { projectPageEvents } from "./projectPage"
import { todoPageEvents } from "./todoPage"

function defaultEventSetup(app) {
    loadSidebarEvents(app)
    loadProjectPageEvents(app.getProject(0))
}

function loadSidebarEvents(app) {
    sidebarEvents(app)
}

function loadProjectPageEvents(project) {
    projectPageEvents(project)
}

function loadTodoPageEvents(todo) {
    todoPageEvents(todo)
}

export { defaultEventSetup, loadSidebarEvents, loadProjectPageEvents, loadTodoPageEvents }