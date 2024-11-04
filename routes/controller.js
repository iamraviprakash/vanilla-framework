import api from "../services/apiClient.js";

async function loadData() {
    const data = await api.fetch("../data/data.json");    
    app.store.states = data.states;
}

export { loadData }