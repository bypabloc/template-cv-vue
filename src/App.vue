<template>
    <navbar/>
    <div :class="'col-12 theme--100'">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
import firebase from "./api/firebase";
import store from "./store/index"

export default {
    components: {
        Navbar
    },
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    store.dispatch('fetchUser',null)
                    alert('Successfully logged out');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                    this.$router.push('/');
                });
        },
    },
};
</script>
<style scoped>
</style>