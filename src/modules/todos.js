const todoFactory = (name, description, dueDate, priority) => {
    const notes = [] 
    let status = false //true = complete; false = incomplete

    const addNote = (note) => {
        notes.push(note)
    }
    const removeNote = (index) => {
        notes.splice(index, 1)
    }

    return { name, description, dueDate, priority, notes, addNote, removeNote, status }
}

export { todoFactory }