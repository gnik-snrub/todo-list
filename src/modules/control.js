import { defaultRender, loadSidebarRendering, loadProjectPageRendering, loadTodoPageRendering } from './ui/render'
import { defaultEventSetup, loadSidebarEvents, loadProjectPageEvents, loadTodoPageEvents } from './events/events'
import { storeAppData } from './storage'

function defaultSetup(app) {
    defaultRender(app)
    defaultEventSetup(app)
    storeData(app)
}

function loadSidebar(app) {
    loadSidebarRendering(app)
    loadSidebarEvents(app)
    storeData(app)
}

function loadProjectPage(project, app) {
    loadProjectPageRendering(project)
    loadProjectPageEvents(project, app)
    storeData(app)
}

function loadTodoPage(todo, app) {
    loadTodoPageRendering(todo)
    loadTodoPageEvents(todo, app)
    storeData(app)
}

function storeData(app) {
    storeAppData(app)
}

export { defaultSetup, loadSidebar, loadProjectPage, loadTodoPage, storeData }