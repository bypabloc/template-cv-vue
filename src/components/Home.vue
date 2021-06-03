<template>
    <div>
        Home
    </div>
</template>

<script>
import firebase from "../api/firebase";

export default {
    name: 'Home',
    data() {
    },
    created(){
        const user = firebase.auth().currentUser;
        console.clear()
        console.log('user',user)
    },
    methods: {
    },
};
</script>