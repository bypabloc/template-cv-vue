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
        if (firebase.auth().currentUser) {
            next();
        } else {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    store.dispatch('fetchUser',user)
                    next();
                } else {
                    next({
                        path: '/login',
                    });
                    // store.dispatch('fetchUser',null)
                }
            });
        }

        // if (to.name !== 'login' && !isAuthenticated) next({ name: 'Login' })
    } else {
        if(to.name === 'login'){
            if (firebase.auth().currentUser) {
                next({
                    path: '/dashboard',
                });
            } else {
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                        store.dispatch('fetchUser',user)
                        next({
                            path: '/dashboard',
                        });
                    }else{
                        next();
                    }
                });
            }
        }else{
            next();
        }
    }
});

export default router;