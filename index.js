import store from "./services/store.js";
import router from "./services/router.js";
import routes from "./routes/index.js";

window.app = {};
app.store = store;
app.router = router;

window.addEventListener("DOMContentLoaded", async () => {
    // Add code which will depend upon dom nodes here
    app.router.init(routes)
})