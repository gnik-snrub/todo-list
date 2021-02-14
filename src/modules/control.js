import { defaultRender, loadSidebarRendering, loadProjectPageRendering, loadTodoPageRendering } from './ui/render'
import { defaultEventSetup, loadSidebarEvents, loadProjectPageEvents, loadTodoPageEvents } from './events/events'

function defaultSetup(app) {
    defaultRender(app)
    defaultEventSetup(app)
}

function loadSidebar(app) {
    loadSidebarRendering(app)
    loadSidebarEvents(app)
}

function loadProjectPage(project) {
    loadProjectPageRendering(project)
    loadProjectPageEvents(project)
}

function loadTodoPage(todo) {
    loadTodoPageRendering(todo)
    loadTodoPageEvents(todo)
}

export { defaultSetup, loadSidebar, loadProjectPage, loadTodoPage }