import './style.css'

const todoFactory = (name, description, dueDate, priority) => {
    const notes = [] 
    const status = false //true = complete; false = uncomplete

    return { name, description, dueDate, priority, notes, status }
}

const test1 = todoFactory("Eat the dishes", "Bite into a stack of ceramic", "1/2/2021", 3)
const test2 = todoFactory("Eeeeeeeeeeeeee", "Bbbbbbbbbbbbbbbbbbbbbbbbbbbb", "1/2/2021", 3)

const projectFactory = (name, description) => {
    const todos = []
    
    const addTodo = (newTodo) => { todos.push(newTodo) }
    const removeTodo = (index) => { todos.splice(index, 1) }

    return { name, description, todos, addTodo, removeTodo }
}

const projectTest = projectFactory("Default", "This is a test project");

projectTest.addTodo(test1)
projectTest.addTodo(test2)

console.table(projectTest.todos)