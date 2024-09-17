const router = {
    routes: [],
    routeStates: {},
    injectRoute: (route) => {
        router.routes.push(route)
    },
    init: (routes) => {
        router.injectRoute(routes())

        //client side routing
        document.addEventListener('click', (e) => {
            e.preventDefault();
            const pathname = e.target.pathname;
            router.go(pathname)
        })

        window.addEventListener('popstate', (e) => {
            router.go(e.state.route, false)
        })

        router.go('/');
    },
    go: async (route, addToHistory = true) => {
        if (addToHistory) {
            history.pushState({ route }, '', route)
        }

        let pageContent = null;

        for (let r of router.routes) {
            if (r.path.startsWith(':')) {
                const routeKey = r.path.split(':')[1];
                router.routeStates[routeKey] = route.split('/')[1];
                pageContent = await r.component({ route: router.routeStates, store: app.store });
                break;
            }

            if (r.path === route) {
                pageContent = await r.component({ route: router.routeStates, store: app.store });
                break;
            }
        }

        if (pageContent) {
            const main = document.getElementById('app');
            main.innerHTML = pageContent;
        }
    }
}

export default router;