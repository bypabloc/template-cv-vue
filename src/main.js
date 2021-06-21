import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import firebase from "./api/firebase"
import { mapState } from "vuex";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import 'bootstrap'

import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import '../src/assets/scss/custom.scss';

const app = createApp(App)

document.title = "Template CV";

const user = localStorage.getItem('user')
if(user){
    const userData = JSON.parse(user)
    console.log('userData',userData)
    store.dispatch('fetchUser',userData)

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            store.dispatch('fetchUser',userData)
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
        swalFire({
            title='',
            text='',
            type=1,
            toExec=()=>{},
        }) {
            let icon = '';
            switch (type) {
                case 1:
                    icon = 'info';
                    title = '<strong>Información</strong>';
                    break;
        
                case 2:
                    icon = 'warning';
                    title = '<strong>Advertencia</strong>';
                    break;
        
                case 3:
                    icon = 'error';
                    title = '<strong>Error</strong>';
                    break;
        
                case 4:
                    icon = 'success';
                    break;
            
                default:
                    icon = 'info';
                    title = '<strong>Información</strong>';
                    break;
            }
            this.$swal.fire({
                title,
                icon,
                html: text,
                showCloseButton: true,
                showCancelButton: false,
                showConfirmButton: false,
                willClose: () => {
                    toExec()
                },
            })
        },
        toast({title='',text='',type=1,timer=3000}) {
            let icon = '';
            switch (type) {
                case 1:
                    icon = 'success';
                    break;
            
                case 2:
                    icon = 'warning';
                    break;
            
                case 3:
                    icon = 'danger';
                    break;
        
                default:
                    icon = 'success';
                    break;
            }

            this.$swal({
                toast: true,
                icon,
                title,
                text,
                position: 'bottom-end',
                showConfirmButton: false,
                timer,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                }
            });
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
app.use(VueSweetalert2);
app.use(store)
app.use(router)
app.mount('#app')
