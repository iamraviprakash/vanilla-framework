import { loadData } from "./controller.js";

const view = async (props) => {
    await loadData();
    const states = props.store.states;
    return states.map(state => { return 'State ' + state.id })
}

export default view;