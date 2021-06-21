<template>
    <div class="container-fluid vh-100 d-flex flex-column">
        <navbar/>
        <div class="row flex-grow-1">
            <main :class="'col p-4 flex-grow-1 content theme-'+[theme]+'-200' ">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
    components: {
        Navbar
    },
    mounted(){
        /*
        console.log('mounted');
        const navBar = document.querySelector('.navbar');
        
        console.log('navBar',navBar)
        console.log('offsetHeight',navBar.offsetHeight)

        const body = document.querySelector('body');
        console.log('body',body)
        console.log('offsetHeight',body.offsetHeight)

        const content = document.querySelector('.content');
        content.style.height = `${body.offsetHeight-navBar.offsetHeight}px`;

        console.log('content',content)
        */
    },
    /*
    mounted(){

        console.clear();

        console.log('mounted');

        const navBar = document.querySelector('.navbar').offsetHeight;
        console.log('navBar',navBar)

        const body = document.querySelector('body');
        console.log('body',body.offsetHeight)

        const content = document.querySelector('.content');
        content.style.height = `${body-navBar}px`;

        console.log('content',content)

    },
    */
};
</script>

<style lang="scss" scoped>
    .main-screen {
        min-height: 100vh;
    }
</style>