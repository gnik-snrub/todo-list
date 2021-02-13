import { todoFactory } from './todos';

const projectFactory = (name, description) => {
    const todos = []
    
    const addTodo = (name, description, dueDate, priority) => {
        todos.push(todoFactory(name, description, dueDate, priority))
    }
    const removeTodo = (index) => {
        todos.splice(index, 1)
    }
    const getTodo = (index) => {
        return todos[index]
    }

    return { name, description, todos, addTodo, removeTodo, getTodo }
}

export { projectFactory }