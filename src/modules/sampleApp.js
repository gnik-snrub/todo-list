import { app } from './app'

function sampleApp() {
    let testApp = app()
    projectOne(testApp)
    projectTwo(testApp)
    projectThree(testApp)
    return testApp
}

function projectOne(app) {
    app.addProject("This is a test project", "I'm a description! Click on me, or the above title, and you can make me say anything you want.")
    let proj = app.getProject(0)
    proj.addTodo("Click me", "This is a todo. You can edit us too! Click on the project in the sidebar to return to the previous page", "2/2/2022", 2)
    proj.addTodo("I'll be 2nd", "Click the below buttons to change my priority status, mark me complete, or to remove me entirely", "2/2/2022", 1)
    proj.getTodo(1).status = true
}

function projectTwo(app) {
    app.addProject("Pick-up", "Stuff you should go buy")
    let proj = app.getProject(1)
    proj.addTodo("Woolworths", "Things to get at Woolies", "2/2/2022", 1)
    proj.addTodo("Uniqlo", "Pick up some new tops", "2/2/2022", 3)
    let todoOne = proj.getTodo(0)
    todoOne.addNote("Bread")
    todoOne.addNote("Milk")
    todoOne.addNote("Pasta")
    todoOne.addNote("Chicken stock")
}

function projectThree(app) {
    app.addProject("Vacation", "Fun places to go!")
    let proj = app.getProject(2)
    proj.addTodo("Nowhere", "You can't go anywhere for a while due to the pandemic ;_;", "2/2/2022", 1)
}

export { sampleApp }