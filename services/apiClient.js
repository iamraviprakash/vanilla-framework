// introduce client side caching

const api = {
    fetch: async (route) => {
        const result = await fetch(route);
        return result.json()
    }
}

export default api;