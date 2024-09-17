import view from "./view.js"

const injectRoute = () => ({
    path: '/',
    component: view,
    children: []
})

export default injectRoute;