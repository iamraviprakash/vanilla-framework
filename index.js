import store from "./services/store.js";
import router from "./services/router.js";

window.app = {};
app.store = store;
app.router = router;

window.addEventListener("DOMContentLoaded", () => {
    // Add code which will depend upon dom nodes here
})