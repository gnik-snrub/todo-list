import { renderSidebar } from "./sidebar"
import { renderProjectPage } from "./projectPage"
import { renderTodoPage } from "./todoPage"
import { createPageContent, generateDetails } from './generic'

function defaultRender(app) {
    loadSidebarRendering(app)
    if (app.projects.length > 0) {
        loadProjectPageRendering(app.getProject(0))
    } else {
        let projectPage = createPageContent()
        generateDetails(projectPage, emptyAppProject())
    }
}

function emptyAppProject() {
    return { name: "No projects remaining", description: "Click the '+' button in the sidebar to start a new project!" }
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