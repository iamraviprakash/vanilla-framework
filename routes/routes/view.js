const view = async (props) => {
    const routeId = props.route.id;
    
    const viewPageElement = document.createElement('h1');
    viewPageElement.innerText = 'Hello state ' + routeId

    return viewPageElement
}

export default view;