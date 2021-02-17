import { app } from './app'

function sampleApp() {
    let testApp = app()
    projectOne(testApp)
    projectTwo(testApp)
    projectThree(testApp)
    return testApp
}

function projectOne(app) {
    app.addProject(
        "This is a project",
        "Think of a project as a category.")
    let proj = app.getProject(0)
    proj.addTodo(
        "Click me",
        "This is a todo. It's a specific task or topic within a category.",
        new Date(),
        1)
    app.getProject(0).getTodo(0).addNote('Click on "This is a project" in the sidebar to return to the project page')
    proj.addTodo(
        "Click on me second",
        "When you return to the project page, pay attention to the boxes to the right of the todos",
        new Date(),
        2)
    app.getProject(0).getTodo(1).addNote('You can click these boxes to edit:')
    app.getProject(0).getTodo(1).addNote('Completion status')
    app.getProject(0).getTodo(1).addNote('Due date')
    app.getProject(0).getTodo(1).addNote('Or even remove a todo entirely.')
    proj.addTodo(
        "Last click",
        "Using the sidebar, you can change between your projects, add new projects, and delete those you no longer need",
        new Date(),
        3)
    app.getProject(0).getTodo(2).addNote('If you didn\'t notice, you can click on the title above, or on this description and edit it freely!')
    app.getProject(0).getTodo(2).addNote('You can also edit these notes, delete the text to remove a note, or hit the "+" button to make a new note.')
    app.getProject(0).getTodo(2).addNote('Good luck, have fun!')
}

function projectTwo(app) {
    app.addProject("Pick-up", "Stuff you should go buy")
    let proj = app.getProject(1)
    proj.addTodo(
        "Woolworths",
        "Things to get at Woolies",
        new Date(),
        1)
    proj.addTodo(
        "Uniqlo",
        "Pick up some new tops",
        new Date(),
        3)
    let todoOne = proj.getTodo(0)
    todoOne.addNote("Bread")
    todoOne.addNote("Milk")
    todoOne.addNote("Pasta")
    todoOne.addNote("Chicken stock")
}

function projectThree(app) {
    app.addProject("Vacation", "Fun places to go!")
    let proj = app.getProject(2)
    proj.addTodo(
        "Nowhere",
        "You can't go anywhere for a while due to the pandemic ;_;",
        new Date(),
        1)
}

export { sampleApp }