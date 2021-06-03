<template>
    <navbar/>
    <div class="container-fluid vh-100 d-flex">
        <div :class="'row flex-grow-1 theme-bg--600'">
            <main class="row flex-fill"> 
                <main class="col-12 flex-fill">
                    <div class="row p-3">
                        <div :class="'col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9 col-xxl-9 theme--100 p-2'">
                            <router-view></router-view>
                        </div>
                    </div>
                </main>
            </main>
        </div>
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