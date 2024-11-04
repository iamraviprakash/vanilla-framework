// introduce client side caching

const api = {
    fetch: async (route) => {
        const result = await fetch(route);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 3000));

        return result.json()
    }
}

export default api;