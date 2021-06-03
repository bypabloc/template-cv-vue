
import { createStore, createLogger } from 'vuex'

const debug = process.env.NODE_ENV !== 'production';

// Create a new store instance.
export default createStore({
    strict: debug,
    plugins: debug ? [createLogger()] : [],

    state: {
        user: {
            loggedIn: false,
            data: null
        }
    },
    getters: {
        user(state){
            return state.user
        },
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
            localStorage.setItem('user', JSON.stringify(data))
        },
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit("SET_USER", null);
            }
        },
    },
})