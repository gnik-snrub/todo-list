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

function loadProjectPage(project, app) {
    loadProjectPageRendering(project)
    loadProjectPageEvents(project, app)
}

function loadTodoPage(todo, app) {
    loadTodoPageRendering(todo)
    loadTodoPageEvents(todo, app)
}

export { defaultSetup, loadSidebar, loadProjectPage, loadTodoPage }