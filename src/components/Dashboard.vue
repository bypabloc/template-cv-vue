<template>
    <div>
        <h2>Dashboard</h2>
        <p>This page is only visible to users that are currently logged in</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "../api/firebase";
export default {
    name: 'Home',
    data() {
        return {
        };
    },
    created(){
        console.log('Dashboard');
        const user = firebase.auth().currentUser;
        console.log('user',user);

    },
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
        user: "user"
        })
    },
    methods: {
        login() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Successfully logged in');
                    this.$router.push('/dashboard');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    },
};
</script>
