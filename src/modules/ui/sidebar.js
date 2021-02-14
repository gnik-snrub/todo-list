function renderSidebar(app) {
    let content = document.querySelector('.content')
    let sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    content.appendChild(sidebar)

    addHeader(sidebar)
    populateProjectList(sidebar, app)
}

function addHeader(sidebar) {
    let header = document.createElement('header')
    header.classList.add('header')
    header.textContent = 'The Todo List'
    sidebar.appendChild(header)
}

function populateProjectList(sidebar, app) {
    let projectList = document.createElement('div')
    projectList.classList.add('project-list')
    sidebar.appendChild(projectList)

    for (let i = 0; i < app.projects.length; i++) {
        let newProject = document.createElement('div')
        newProject.classList.add('project')
        newProject.textContent = `${app.getProject(i).name}`
        newProject.setAttribute('data-value', i);
        projectList.appendChild(newProject)
    }
}

export { renderSidebar }