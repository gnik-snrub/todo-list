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

    let objectTitle = document.createElement('textarea')
    objectTitle.classList.add('page-title')
    objectTitle.value = `${obj.name}`
    objectDetails.appendChild(objectTitle)

    let objectDescription = document.createElement('textarea')
    objectDescription.classList.add('page-description')
    objectDescription.value = `${obj.description}`
    objectDetails.appendChild(objectDescription)
}

export { generateDetails, createPageContent }