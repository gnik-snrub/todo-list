import { loadSidebar } from '../control'

function enablePageDetailEditing(obj, app) {
    let pageTitle = document.querySelector('.page-title')
    pageTitle.addEventListener('change', function() {
        obj.name = pageTitle.value
        document.querySelector('.sidebar').remove()
        loadSidebar(app)
    })
    let pageDescription = document.querySelector('.page-description')
    pageDescription.addEventListener('change', function() {
        obj.description = pageDescription.value
    })
}

export { enablePageDetailEditing }