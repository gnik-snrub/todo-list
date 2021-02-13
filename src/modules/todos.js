const todoFactory = (name, description, dueDate, priority) => {
    const notes = [] 
    const status = false //true = complete; false = uncomplete

    const getNotes = () => {
        let string = '';
        for (let i = 0; i < notes.length; i++) {
            string += `${notes[i]}\n`
        }
        return string
    }
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

    return { name, description, dueDate, priority, getNotes, addNote, removeNote, status, changeStatus }
}

export { todoFactory }