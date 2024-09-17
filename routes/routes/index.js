import view from "./view.js"

const injectRoute = () => ({
    path: ':id',
    component: view,
    children: []
})

export default injectRoute;