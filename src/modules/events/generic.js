import { loadSidebar } from '../control'

function enablePageDetailEditing(obj, app) {
    let pageTitle = document.querySelector('.page-title')
    pageTitle.addEventListener('input', function() {
        if (pageTitle.textContent == '') {
            obj.name = 'Un-named'
            pageTitle.textContent = obj.name
        } else {
            obj.name = pageTitle.textContent
        }
        resetSidebarAndSaveData(app)
    })
    let pageDescription = document.querySelector('.page-description')
    pageDescription.addEventListener('input', function() {
        if (pageDescription.value == '') {
            obj.description = 'Description goes here'
        } else {
            obj.description = pageDescription.textContent
        }
        resetSidebarAndSaveData(app)
    })
}

function resetSidebarAndSaveData(app) {
    document.querySelector('.sidebar').remove()
    loadSidebar(app)
}

export { enablePageDetailEditing }