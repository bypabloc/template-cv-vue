<template>

    <div class="container-fluid vh-100 d-flex">
        <div :class="'row flex-grow-1 theme-bg-'+[theme]+'-600'">
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
                        <div :class="'col-4 theme-bg-'+[theme]+'-800 p-2'">
                            <div class="col-12 flex-fill">
                                izquierda

                                <svg class="bi bi-alert-triangle text-success" width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"></svg>
                            </div>
                        </div>
                        <div :class="'col-8 theme-'+[theme]+'-100 p-2'">
                            <div :class="'card'">
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
                                    <div class="row">
                                        <div class="col-1">
                                            <i :class="'bi-graph-up theme-color-'+[theme]+'-800 p-2'" style="font-size: 2rem;"></i>
                                        </div>
                                        <div class="col-11">
                                            <p>
                                                <strong>
                                                    Having started with a StartUp from scratch until it is self-sustaining (Dibal.pe).
                                                </strong>
                                                <br/>
                                                <small>
                                                    For having been the first programmer
                                                    <br/>
                                                    For having fought to make it grow
                                                    <br/>
                                                    For having fought against the pandemic and not giving up with all the cons that were presented to us 
                                                    <br/>
                                                    For my leadership in each new member of the team.
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-1">
                                            <i :class="'bi-bank theme-color-'+[theme]+'-800 p-2'" style="font-size: 2rem;"></i>
                                        </div>
                                        <div class="col-11">
                                            <p>
                                                <strong>
                                                    Have graduated as an Informatics Engineer.
                                                </strong>
                                                <br/>
                                                <small>
                                                    The pride of having exceeded one goal, of so many, of my life.
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <Education/>

                            <Skills/>
<!-- 
                            <div class="card mt-2">
                                <div class="card-body">
                                    <h5 class="card-title">
                                        <ins>
                                            Skills and Expertize
                                        </ins>
                                    </h5>
                                    <div class="row">
                                        <div class="col-6">
                                            <i class="fab fa-php" :class="'theme-color-'+[theme]+'-800 p-2'" style="font-size: 1rem;"></i>
                                            PHP
                                            <div class="progress" style="height: 3px;">
                                                <div :class="'progress-bar theme-bg-'+[theme]+'-800'" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <i class="fab fa-js" :class="'theme-color-'+[theme]+'-800 p-2'" style="font-size: 1rem;"></i>
                                            JavaScript
                                            <div class="progress" style="height: 3px;">
                                                <div :class="'progress-bar theme-bg-'+[theme]+'-800'" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <i class="fab fa-laravel" :class="'theme-color-'+[theme]+'-800 p-2'" style="font-size: 1rem;"></i>
                                            Laravel Framework
                                            <div class="progress" style="height: 3px;">
                                                <div :class="'progress-bar theme-bg-'+[theme]+'-800'" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <i class="fab fa-vuejs" :class="'theme-color-'+[theme]+'-800 p-2'" style="font-size: 1rem;"></i>
                                            VueJS Framework
                                            <div class="progress" style="height: 3px;">
                                                <div :class="'progress-bar theme-bg-'+[theme]+'-800'" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <i class="fab fa-ubuntu" :class="'theme-color-'+[theme]+'-800 p-2'" style="font-size: 1rem;"></i>
                                            Ubuntu Server
                                            <div class="progress" style="height: 3px;">
                                                <div :class="'progress-bar theme-bg-'+[theme]+'-800'" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <i class="fab fa-centos" :class="'theme-color-'+[theme]+'-800 p-2'" style="font-size: 1rem;"></i>

                                            CentOS
                                            <div class="progress" style="height: 3px;">
                                                <div :class="'progress-bar theme-bg-'+[theme]+'-800'" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-6">
                                            <i class="fab fa-aws" :class="'theme-color-'+[theme]+'-800 p-2'" style="font-size: 1rem;"></i>
                                            Amazon Web Services
                                            <div class="progress" style="height: 3px;">
                                                <div :class="'progress-bar theme-bg-'+[theme]+'-800'" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-6">
                                            <i class="fab fa-git" :class="'theme-color-'+[theme]+'-800 p-2'" style="font-size: 1rem;"></i>
                                            Git
                                            <div class="progress" style="height: 3px;">
                                                <div :class="'progress-bar theme-bg-'+[theme]+'-800'" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <i class="fab fa-github" :class="'theme-color-'+[theme]+'-800 p-2'" style="font-size: 1rem;"></i>
                                            GitHub
                                            <div class="progress" style="height: 3px;">
                                                <div :class="'progress-bar theme-bg-'+[theme]+'-800'" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                             -->
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
import Skills from './components/Skills'
import Education from './components/Education'

export default {
    name: 'App',
    components: {
        // Colors,
        Skills,
        Education,
    },
    data() {
        return {
            theme: String,
        }
    },
    mounted() {
        this.theme = 'light-blue';
    },
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
