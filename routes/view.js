import { loadData } from "./controller.js";

const view = async (props) => {
    await loadData();
    const states = props.store.states;
    return states.map(state => { return '<a href="'+state.id+'"> State ' + state.id + '</a>'})
}

export default view;