function sidebar(app) {
    let content = document.querySelector('.content')
    let sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    content.appendChild(sidebar)

    let header = document.createElement('header')
    header.classList.add('header')
    header.textContent = 'The Todo List'
    sidebar.appendChild(header)

    let projectList = document.createElement('div')
    projectList.classList.add('project-list')
    sidebar.appendChild(projectList)

    for (let i = 0; i < app.projects.length; i++) {
        let newProject = document.createElement('div')
        newProject.classList.add('project')
        newProject.textContent = `${app.projects[i].name}`
        projectList.appendChild(newProject)
    }
}

export { sidebar }