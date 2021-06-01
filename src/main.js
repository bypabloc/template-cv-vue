

/*

import { createApp } from 'vue'
import { store } from './store'
import App from './App.vue'

const app = createApp(App)

app.use(store)

app.mount('#app')

*/


import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// Custom.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

import 'bootstrap'

// import 'bootstrap-icons';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css'


// custom.scss (or app.scss)
import '../src/assets/scss/custom.scss';

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
