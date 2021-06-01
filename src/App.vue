<template>

    <div class="container-fluid vh-100 d-flex">
        <div class="row flex-grow-1 theme-bg-gray-600">
            <main class="row flex-fill"> 

            <!-- <main class="col p-4 flex-fill">  -->
                <!-- style="background-color: rgba(0,0,255,.1);" -->
                
                <!--
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
                -->

                <main class="col-12 mt-3 flex-fill">
                    <div class="row p-3">
                        <div class="col-4 theme-gray-800 p-2">
                            <div class="col-12 flex-fill">
                                izquierda

                                <svg class="bi bi-alert-triangle text-success" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"></svg>
                            </div>
                        </div>
                        <div class="col-8 theme-bg-gray-50 p-2">

                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <ins>
                                            Who am I?
                                        </ins>
                                    </h5>
                                    <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
                                    <p class="card-text">
                                        I'm a developer born in Venezuela and CTO of <a href="https://dibal.pe">Dibal.pe</a>.
I'm interested and skilled in different topics of Information Technology including programming, web development, and computer and network security.
                                    </p>
                                </div>
                            </div>

                            <div class="card mt-2">
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <ins>
                                            What am I proud of?
                                        </ins>
                                    </h5>
                                    <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
                                        <div class="row">
                                            <div class="col-1">
                                                <i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i>
                                            </div>
                                            <div class="col-11">
                                                <p>
                                                    <strong>
                                                        De haber iniciado con una StartUp desde cero hasta que se mantiene por si sola.
                                                    </strong>
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
                                                    <small>
                                                        
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div class="card card-outline mt-3">
                                <div class="card-header">
                                    <p class="card-title h4">
                                        
                                    </p>
                                </div>
                                <div class="card-body">
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

// import Colors from './components/Colors'

export default {
    name: 'App',
    components: {
        // Colors,
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
