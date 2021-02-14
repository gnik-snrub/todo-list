import { loadProjectPage } from '../control'

function sidebarEvents(app) {
    let projects = document.querySelectorAll('.project')
    projects.forEach(proj => proj.addEventListener('click', function() {
        let i = proj.getAttribute('data-value')
        document.querySelector('.page-content').remove()
        loadProjectPage(app.getProject(i))
    }));
}

export { sidebarEvents }