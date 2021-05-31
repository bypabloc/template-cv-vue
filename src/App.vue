<template>

    <div class="container-fluid vh-100 d-flex">
        <div class="row flex-grow-1">
            <main class="col p-4 flex-fill" style="background-color: rgba(0,0,255,.1);"> 
                <!-- style="background-color: rgba(0,0,255,.1);" -->
                
                <div class="row dynamic-color">
                    <Colors color="red"/>
                    <Colors color="pink"/>
                    <Colors color="purple"/>
                    <Colors color="deep-purple"/>
                    <Colors color="indigo"/>
                    <Colors color="blue"/>
                    <Colors color="light-blue"/>
                    <Colors color="cyan"/>
                    <Colors color="teal"/>
                    <Colors color="green"/>
                    <Colors color="light-green"/>
                    <Colors color="lime"/>
                    <Colors color="yellow"/>
                    <Colors color="amber"/>
                    <Colors color="orange"/>
                    <Colors color="deep-orange"/>
                    <Colors color="brown"/>
                    <Colors color="gray"/>
                    <Colors color="blue-gray"/>
                    <Colors color="white"/>
                    <Colors color="black"/>
                </div>

            </main>
        </div>
    </div>

    <!-- <div id="wrapper" class="mh-100">
        <div class="container">
        </div>
    </div> -->
    <!-- <div class="container fluid fill-height" style="background-color: rgba(0,0,255,.1);">

        <main class="col-12 mt-3 flex-fill">
            <div class="row p-3">
                <div class="col-4">
                    izq
                </div>
                <div class="col-8">
                    der
                </div>
            </div>
        </main>

        <Home/>
        
    </div> -->

</template>

<script>

import Colors from './components/Colors'

export default {
    name: 'App',
    components: {
        Colors,
    }
}
</script>

<style scoped>

.vh-100 {
    min-height: 100vh;
}

/* #wrapper {
    background-color: rgba(0,0,255,.1);
    width: 100% !important;
    height: 100% !important;
    min-height: 100% !important;
    display: block !important;
}  */
</style>
