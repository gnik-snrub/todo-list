import { app } from './app'

function sampleApp() {
    let testApp = app()
    projectOne(testApp)
    projectTwo(testApp)
    projectThree(testApp)
    return testApp
}

function projectOne(app) {
    app.addProject("Default", "This is a test project")
    let proj = app.getProject(0)
    proj.addTodo("Eat the dishes", "Bite into a stack of ceramic", "2/2/2022", 2)
    proj.addTodo("Feed the bird", "Put some new seed in his tray, and change his water", "2/2/2022", 1)
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
    todoOne.addNote("Chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more chicken stock and also some more ")
}

function projectThree(app) {
    app.addProject("Vacation", "Fun places to go!")
    let proj = app.getProject(2)
    proj.addTodo("Nowhere", "You can't go anywhere for a while due to the pandemic ;_;", "2/2/2022", 1)
}

export { sampleApp }