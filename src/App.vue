<template>

    <div class="container-fluid vh-100 d-flex">
        <div :class="'row flex-grow-1 theme-bg-'+[theme]+'-600'">
            <main class="row flex-fill"> 
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
                            
                            <Proud/>
                            <Education/>
                            <Skills/>
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
import Proud from './components/Proud'

export default {
    name: 'App',
    components: {
        // Colors,
        Skills,
        Education,
        Proud,
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
