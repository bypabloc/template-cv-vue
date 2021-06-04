import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import 'bootstrap'

import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import '../src/assets/scss/custom.scss';

const app = createApp(App)

app.mixin({  
    methods: {
        resizeTextarea (event) {
            event.target.style.height = (event.target.scrollHeight) + 'px'
        },
    },
})
app.use(store)
app.use(router)
app.mount('#app')
