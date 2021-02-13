import './style.css'
import { test } from './modules/testbed';
import { sidebar } from './modules/ui/sidebar.js'

function init() {
    let app = test()
    sidebar(app)
}

init()