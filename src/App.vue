<template>

    <div class="container-fluid vh-100 d-flex">
        <div class="row flex-grow-1 color-bg-gray-600">
            <main class="row flex-fill"> 
            <!-- <main class="col p-4 flex-fill">  -->
                <!-- style="background-color: rgba(0,0,255,.1);" -->
                
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

                <!--
                <div class="row dynamic-color">
                </div>
                -->

                <main class="col-12 mt-3 flex-fill">
                    <div class="row p-3">
                        <div class="col-4 color-gray-800 p-2">
                            <div class="col-12 flex-fill">
                                izquierda
                            </div>
                        </div>
                        <div class="col-8 color-bg-gray-50 p-2">

                            <div class="card card-outline">
                                <div class="card-header">
                                    <p class="card-title h4">
                                        Who am I?
                                    </p>
                                </div>
                                <div class="card-body">
                                    I'm a developer born in Venezuela and CTO of <a href="https://dibal.pe">Dibal.pe</a>.
I'm interested and skilled in different topics of Information Technology including programming, web development, and computer and network security.
                                </div>
                            </div>

                            <div class="card card-outline mt-3">
                                <div class="card-header">
                                    <p class="card-title h4">
                                        What am I proud of?
                                    </p>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-1">
                                            <i aria-hidden="true" class="v-icon v-icon--right mdi mdi-help-rhombus-outline theme--light"></i>
                                        </div>
                                        <div class="col-11">
                                            <p>
                                                <strong>
                                                    De haber iniciado con una StartUp desde cero hasta que se mantiene por si sola.
                                                </strong>
                                                <br>
                                                <small>
                                                    (Dibal.pe por su crecimiento constante)
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-1">
                                            <i aria-hidden="true" class="v-icon v-icon--right mdi mdi-help-rhombus-outline theme--light"></i>
                                        </div>
                                        <div class="col-11">
                                            <p>
                                                <strong>
                                                    De haberme graduado como Ingeniero en Informatica
                                                </strong>
                                                <br>
                                                <small>
                                                    (Por mi graduacion de la universidad)
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card card-outline mt-3">
                                <div class="card-header">
                                    <p class="card-title h4">
                                        Education
                                    </p>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-3">
                                            2011 - 2016.
                                        </div>
                                        <div class="col-9">
                                            <p>
                                                <strong>
                                                    Ingenieria en Informatica
                                                </strong>
                                                <br>
                                                <small>
                                                    IUTAB University.
                                                    <br/>
                                                    Aprender las bases de la tecnologia.
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card card-outline mt-3">
                                <div class="card-header">
                                    <p class="card-title h4">
                                        Skills and Expertize
                                    </p>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-6">
                                            <p>
                                                <strong>
                                                    PHP
                                                </strong>
                                                <br>
                                                <small>
                                                    
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </main>
        </div>
    </div>

    <!-- <div id="wrapper" class="mh-100">
        <div class="container">
        </div>
    </div> -->
    <!-- <div class="container fluid fill-height" style="background-color: rgba(0,0,255,.1);">


        <Home/>
        
    </div> -->

</template>

<script>

import Colors from './components/Colors'

export default {
    name: 'App',
    components: {
        Colors
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
