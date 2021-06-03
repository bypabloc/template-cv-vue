import { createWebHistory, createRouter } from "vue-router";
import firebase from "../api/firebase";
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
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/auth/Login'),
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/auth/Register'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import(/* webpackChunkName: "dashboard" */ '../components/Dashboard'),
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
        if (firebase.auth().currentUser) {
            next();
        } else {
            const user = localStorage.getItem('user')
            if(user) {
                const userData = JSON.parse(user)
                store.dispatch('fetchUser',userData)
            }else{
                alert('You must be logged in to see this page');
                next({
                    path: '/login',
                });
            }
        }
    } else {
      next();
    }
});

export default router;