const router = {
    routes: [],
    currentRoute: '',
    routeStates: {},
    injectRoute: (route) => {
        router.routes.push(route)

        if (route.children?.length > 0) {
            for (let r of route.children) {
                router.injectRoute(r())
            }
        }
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

        router.currentRoute = route;

        let pageContent = null;

        for (let r of router.routes) {
            if (r.path.startsWith(':')) {
                const routeKey = r.path.split(':')[1];
                router.routeStates[routeKey] = route.split('/')[1];
                pageContent = await r.component({ route: router.routeStates, reload: router.reload });
                break;
            }

            if (r.path === route) {
                pageContent = await r.component({ route: router.routeStates, reload: router.reload });
                break;
            }
        }

        if (pageContent) {
            const main = document.getElementById('app');
            main.innerHTML = "";
            main.appendChild(pageContent);
        }
    },
    reload: async () => {
        router.go(router.currentRoute, false)
    }
}

export default router;