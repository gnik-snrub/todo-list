import './style.css'
import { test } from './modules/testbed';
import { render } from './modules/ui/render.js'

function init() {
    let app = test()
    render(app, 0)
}

init()