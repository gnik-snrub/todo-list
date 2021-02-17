import { loadProjectPage, loadSidebar } from '../control'

function sidebarEvents(app) {
    goToProjectPage(app)
    addProjectButton(app)
}

function goToProjectPage(app) {
    let projects = document.querySelectorAll('.project')
    projects.forEach(proj => proj.addEventListener('click', function() {
        let i = proj.getAttribute('data-value')
        document.querySelector('.page-content').remove()
        loadProjectPage(app.getProject(i), app)
    }));
}

function addProjectButton(app) {
    let addProject = document.getElementById('add-project')
    addProject.addEventListener('click', function() {
        app.addProject('New Project', 'Don\'t forget to add details!')
        document.querySelector('.sidebar').remove()
        loadSidebar(app)
    })
}

export { sidebarEvents }