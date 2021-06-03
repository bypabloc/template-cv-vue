<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Template CV</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <template v-if="user.loggedIn">
                        <router-link to="dashboard" class="nav-link">Dashboard</router-link>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{user.data.displayName}}
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <a class="dropdown-item" href="#" @click.prevent="signOut">Sign out</a>
                                </li>
                            </ul>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <router-link to="login" class="nav-link">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="register" class="nav-link">Register</router-link>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from "vuex"
import firebase from '../api/firebase'
import store from "../store/index"

export default {
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
            user: "user"
        })
    },
    methods: {
        signOut() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace({ name: "/" });
                    store.dispatch('fetchUser',null)
                });
        }
    }
};
</script>