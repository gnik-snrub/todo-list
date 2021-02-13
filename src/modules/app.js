import { projectFactory } from './projects';

const app = () => {
    const projects = []

    const addProject = (name, description) => {
        const newProject = projectFactory(name, description)
        projects.push(newProject)
    }
    const removeProject = (index) => {
        projects.splice(index, 1)
    }
    const getProject = (index) => {
        return projects[index]
    }

    return { projects, addProject, removeProject, getProject }
}

export { app }