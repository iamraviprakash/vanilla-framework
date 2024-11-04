const store = {
    states: [],
}

const handler = () => ({
    get: (target, prop) => {
        return target[prop];
    },
    set: (target, prop, value) => {
        target[prop] = value;

        // [TO-DO] Implement shallow comparison
        window.dispatchEvent(new Event('states'));  

        return true;
    }
})

const proxyStore = new Proxy(store, handler());

export default proxyStore;