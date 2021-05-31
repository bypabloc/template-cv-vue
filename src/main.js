import { createApp } from 'vue'
import App from './App.vue'

// Custom.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

import 'bootstrap'

// custom.scss (or app.scss)
import 'bootstrap/scss/bootstrap.scss';
import '../src/assets/scss/custom.scss';

createApp(App).mount('#app')
