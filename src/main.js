import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import firebase from "./api/firebase"
import { mapState } from "vuex";

import 'bootstrap'

import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import '../src/assets/scss/custom.scss';

const app = createApp(App)

document.title = "Template CV";

const user = localStorage.getItem('user')
if(user){
    const userData = JSON.parse(user)
    store.dispatch('fetchUser',userData)

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            store.dispatch('fetchUser',user)
        }
    });
}else{
    store.dispatch('fetchUser',null)
}

app.mixin({  
    methods: {
        resizeTextarea (event) {
            event.target.style.height = (event.target.scrollHeight) + 'px'
        },
    },
    created () {
    },
    computed: {
        // map `this.theme` to `this.$store.getters.theme`
        ...mapState([
            'theme',
        ]),
    },
})
app.use(store)
app.use(router)
app.mount('#app')
