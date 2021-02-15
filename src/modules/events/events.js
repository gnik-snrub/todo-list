import { sidebarEvents } from "./sidebar"
import { projectPageEvents } from "./projectPage"
import { todoPageEvents } from "./todoPage"

function defaultEventSetup(app) {
    loadSidebarEvents(app)
    loadProjectPageEvents(app.getProject(0), app)
}

function loadSidebarEvents(app) {
    sidebarEvents(app)
}

function loadProjectPageEvents(project, app) {
    projectPageEvents(project, app)
}

function loadTodoPageEvents(todo, app) {
    todoPageEvents(todo, app)
}

export { defaultEventSetup, loadSidebarEvents, loadProjectPageEvents, loadTodoPageEvents }