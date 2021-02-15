function createPageContent() {
    let content = document.querySelector('.content')
    let pageContent = document.createElement('div')
    pageContent.classList.add('page-content')
    content.appendChild(pageContent)

    return pageContent
}

function generateDetails(page, obj) {
    let objectDetails = document.createElement('div')
    objectDetails.classList.add('page-details')
    page.appendChild(objectDetails)

    let objectTitle = document.createElement('span')
    objectTitle.classList.add('page-title')
    objectTitle.contentEditable = true
    objectTitle.setAttribute('role', 'textbox')
    objectTitle.textContent = `${obj.name}`
    objectDetails.appendChild(objectTitle)

    let objectDescription = document.createElement('span')
    objectDescription.classList.add('page-description')
    objectDescription.contentEditable = true
    objectDescription.setAttribute('role', 'textbox')
    objectDescription.textContent = `${obj.description}`
    objectDetails.appendChild(objectDescription)
}

export { generateDetails, createPageContent }