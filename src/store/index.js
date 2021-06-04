
import { createStore, createLogger } from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    strict: debug,
    plugins: debug ? [createLogger()] : [],

    state: {
        theme: 'light-blue',
        user: {
            loggedIn: false,
            data: null,
        },
        ...state,
    },
    getters: {
        user(state){
            return state.user
        },
        theme(state){
            return state.theme
        },
        ...getters,
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
            localStorage.setItem('user', JSON.stringify(data))
        },
        ...mutations,
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email,
                    uid: user.uid,
                });
            } else {
                commit("SET_USER", null);
            }
        },
        ...actions,
    },
})