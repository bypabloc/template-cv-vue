<template>
    <div class="row">
        <div class="text-center">
            <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
    <!-- <div id="circle">
        <div class="loader">
            <div class="loader">
                <div class="loader">
                    <div class="loader">
                    </div>
                </div>
            </div>
        </div>
    </div>  -->
</template>

<script>

export default {
    name: 'Loading',
};
</script>

<style scoped>
    #circle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 70px;
        height: 70px;	
    }

    .loader {
        width: calc(100% - 0px);
        height: calc(100% - 0px);
        border: 8px solid #162534;
        border-top: 8px solid #09f;
        border-radius: 50%;
        animation: rotate 5s linear infinite;
    }

    @keyframes rotate {
        100% {transform: rotate(360deg);}
    } 
</style>