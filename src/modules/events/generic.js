import { loadSidebar } from '../control'

function enablePageDetailEditing(obj, app) {
    let pageTitle = document.querySelector('.page-title')
    pageTitle.addEventListener('input', function() {
        obj.name = pageTitle.value
        document.querySelector('.sidebar').remove()
        loadSidebar(app)
    })
    let pageDescription = document.querySelector('.page-description')
    pageDescription.addEventListener('input', function() {
        obj.description = pageDescription.value
    })
}

export { enablePageDetailEditing }