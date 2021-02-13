import { sidebar } from "./sidebar";
import { projectPage } from "./projectPage";

function render(app, projectIndex) {
    sidebar(app)
    projectPage(app, projectIndex)
}

export { render }