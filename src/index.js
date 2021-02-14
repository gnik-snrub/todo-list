import './style.css'
import { sampleApp } from './modules/sampleApp'
import { defaultSetup } from './modules/control'

function init() {
    let app = sampleApp()
    defaultSetup(app)
}

init()