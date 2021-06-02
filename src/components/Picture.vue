<template>

    <div>
        <img class="img-fluid mx-auto d-block img-thumbnail" :src="url"/>
        <!-- https://dibal-storage.s3.us-east-2.amazonaws.com/images/img_profile.png -->
    </div>

</template>

<script>

export default {
    name: 'Picture',
    data() {
        return {
            theme: String,
        }
    },
    props: {
        url: String,
    },
    components: {
    },
    methods:{
        test: () => {
            return "#";
        }
    },
    created(){
    },
    mounted() {
        this.test();
        this.theme = 'light-blue';
    },
}
</script>

<style scoped>
    img {
        width: 250px;
        border-radius: 50%;
    }

    @media (min-width: 0px) and (max-width: 600px) {
        img {
            width: 250px;
        }
    }

</style>