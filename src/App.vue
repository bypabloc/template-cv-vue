<template>

    <div class="container-fluid vh-100 d-flex">
        <div :class="'row flex-grow-1 theme-bg-'+[theme]+'-600'">
            <main class="row flex-fill"> 
                <main class="col-12 flex-fill">
                    <div class="row p-3">
                        <div :class="'col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 col-xxl-3 theme-bg-'+[theme]+'-800 p-2'">
                            <div class="col-12 flex-fill">

                                <Picture url="https://dibal-storage.s3.us-east-2.amazonaws.com/images/img_profile.png"/>

                            </div>
                        </div>
                        <div :class="'col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9 col-xxl-9 theme-'+[theme]+'-100 p-2'">
                            <iam/>
                            <proud/>
                            <education/>
                            <skills/>
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
import Iam from './components/Iam'
import Proud from './components/Proud'
import Education from './components/Education'
import Skills from './components/Skills'
import Picture from './components/Picture'

export default {
    name: 'App',
    components: {
        // Colors,
        Skills,
        Education,
        Proud,
   
        Iam,
        Picture,
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
