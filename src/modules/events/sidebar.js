import { loadProjectPage, loadSidebar } from '../control'

function sidebarEvents(app) {
    goToProjectPage(app)
    addProjectButton(app)
    removeProjectButton(app)
}

function goToProjectPage(app) {
    let projects = document.querySelectorAll('.project-list-text')
    projects.forEach(proj => proj.addEventListener('click', function() {
        let i = proj.parentElement.getAttribute('data-value')
        document.querySelector('.page-content').remove()
        loadProjectPage(app.getProject(i), app)
    }));
}

function addProjectButton(app) {
    let addProject = document.getElementById('add-project')
    addProject.addEventListener('click', function() {
        app.addProject('New Project', 'Don\'t forget to add details!')
        document.querySelector('.sidebar').remove()

        let possibleEmptyListMessage = document.createElement('empty-project-list')
        possibleEmptyListMessage.remove()

        loadSidebar(app)
    })
}

function removeProjectButton(app) {
    let removeProjects = document.querySelectorAll('.remove-project-button')
    removeProjects.forEach(proj => proj.addEventListener('click', function() {
        let i = proj.parentElement.getAttribute('data-value')

        app.removeProject(i)

        if (app.projects.length == 0) {
            document.querySelector('.project-list').getElementsByTagName('div')[1].remove()
            document.querySelector('.page-content').getElementsByTagName('div')[1].remove()
            document.querySelector('.page-title').textContent = "No projects remaining"
            document.querySelector('.page-description').textContent = "Click the '+' button in the sidebar to start a new project!"
        }

        if (app.projects.length > 0) {
            document.querySelector('.page-content').remove()
            loadProjectPage(app.getProject(0), app)
        }

        document.querySelector('.sidebar').remove()
        loadSidebar(app)
    }))
}

export { sidebarEvents }