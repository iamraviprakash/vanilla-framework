import { loadData } from "./controller.js";
import stylesCSS from "./view.css" with { type: 'css' };

// [TO-DO] Add into the hook/function which fetches only on initial render
loadData();

const view = async (props) => {
    const states = props.states;

    const styles = document.createElement('style');
    styles.textContent=stylesCSS.cssRules[0].cssText;

    document.head.appendChild(styles);

    const viewPageElement = document.createElement('div');

    if(states.length == 0) {
        viewPageElement.innerHTML = '<h3>Loading...</h3>'
    } else {
        viewPageElement.innerHTML = '<h1>Welcome to Vanilla framework!!!</h1>'+states.map(state => { return '<a href="'+state.id+'"> State ' + state.id + '</a>'})
    }
    
    return viewPageElement;
}

const connect = (comp) => (props) =>{
    window.addEventListener('states', () => {
        props.reload();
    })

    return comp({...props, states: app.store.states});
}

export default connect(view);