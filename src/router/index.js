import { createWebHistory, createRouter } from "vue-router";
import store from '../store'

const routes = [
    {
        path: '/',
        name: '/',
        component: () => import('../components/Home'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/Login'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/Register'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/admin/Dashboard'),
        meta: {
            authRequired: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        
        const isLogged = store.state.user.loggedIn;
        if(isLogged){
            next();
        }else{
            next({
                path: '/login',
            });
        }

    } else {
        if(to.name === 'login' || to.name === 'register'){
            const isLogged = store.state.user.loggedIn;
            if(isLogged){
                next({
                    path: '/dashboard',
                });
            }else{
                next();
            }
        }else{
            next();
        }
    }
});

export default router;