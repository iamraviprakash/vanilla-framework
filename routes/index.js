import view from "./view.js"
import childRoute from "./routes/index.js"

const injectRoute = () => ({
    path: '/',
    component: view,
    children: [childRoute]
})

export default injectRoute;