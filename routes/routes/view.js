const view = async (props) => {
    const routeId = props.route.id;
    return '<h1>Hello state ' + routeId + '</h1>'
}

export default view;