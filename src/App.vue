<template>
    <navbar/>
    <div :class="'col-12 theme--100'">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
    components: {
        Navbar
    },
};
</script>
<style scoped>
</style>