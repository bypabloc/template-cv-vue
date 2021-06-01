import { createApp } from 'vue'
import App from './App.vue'

// Custom.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

import 'bootstrap'

// import 'bootstrap-icons';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'


// custom.scss (or app.scss)
import '../src/assets/scss/custom.scss';

createApp(App).mount('#app')
