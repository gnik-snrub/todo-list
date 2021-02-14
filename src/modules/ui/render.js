import { renderSidebar } from "./sidebar"
import { renderProjectPage } from "./projectPage"
import { renderTodoPage } from "./todoPage"

function defaultRender(app) {
    loadSidebarRendering(app)
    loadProjectPageRendering(app.getProject(0))
}

function loadSidebarRendering(app) {
    renderSidebar(app)
}

function loadProjectPageRendering(project) {
    renderProjectPage(project)
}

function loadTodoPageRendering(todo) {
    renderTodoPage(todo)
}

export { defaultRender, loadSidebarRendering, loadProjectPageRendering, loadTodoPageRendering }