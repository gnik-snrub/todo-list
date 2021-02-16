const todoFactory = (name, description, dueDate, priority) => {
    const notes = [] 
    const status = false //true = complete; false = incomplete

    const addNote = (note) => {
        notes.push(note)
    }
    const removeNote = (index) => {
        notes.splice(index, 1)
    }

    const changeStatus = () => {
        if (status == true) {
            status = false
        } else {
            status = true
        }
    }

    return { name, description, dueDate, priority, notes, addNote, removeNote, status, changeStatus }
}

export { todoFactory }