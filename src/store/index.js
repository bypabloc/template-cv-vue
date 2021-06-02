
import { createStore, createLogger } from 'vuex'

const debug = process.env.NODE_ENV !== 'production';

// Create a new store instance.
export default createStore({
    strict: debug,
    plugins: debug ? [createLogger()] : [],

    state: {},
    getters: {},
    actions: {},
    mutations: {},
})