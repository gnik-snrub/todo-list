import { app } from './app'

function storeAppData(app) {
    let jsonData = JSON.stringify(app)
    window.localStorage.setItem('appData', jsonData)
}

function dataInStorage() {
    if (window.localStorage.getItem('appData') === null) {
        return false
    } else {
        return true
    }
}

function restoreAppData() {
    let storedData = JSON.parse(window.localStorage.getItem('appData'))
    let storedApp = app();

    let projectData = storedData.projects
    for (let p = 0; p < projectData.length; p++) {
        let newProject = projectData[p]
        storedApp.addProject(newProject.name, newProject.description)

        let todoData = newProject.todos
        for (let t = 0; t < todoData.length; t++) {
            let newTodo = todoData[t]
            storedApp.projects[p].addTodo(
                newTodo.name,
                newTodo.description,
                new Date(newTodo.dueDate),
                newTodo.priority
            )
            storedApp.projects[p].todos[t].status = newTodo.status

            let noteData = newTodo.notes
            for (let n = 0; n < noteData.length; n++) {
                let newNote = noteData[n]
                storedApp.projects[p].todos[t].addNote(newNote)
            }
        }
    }

    return storedApp
}

export { storeAppData, dataInStorage, restoreAppData }