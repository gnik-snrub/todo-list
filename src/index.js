import './style.css'

const todoFactory = (name, description, dueDate, priority) => {
    const notes = [] 
    const status = false //true = complete; false = uncomplete

    return { name, description, dueDate, priority, notes, status }
}

const factoryTest = todoFactory("Eat the dishes", "Bite into a stack of ceramic", "1/2/2021", 3)

console.table(factoryTest)