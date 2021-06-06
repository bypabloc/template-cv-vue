<template>

    <div class="">
        <!-- <Title :text="title"/> -->

        <div :class="'title theme-color-'+[theme]+'-200 p-2 d-flex align-items-center justify-content-center text-center' ">
            <h2> {{ name }} </h2>
        </div>
        <div :class="'slogan theme-color-'+[theme]+'-50 p-2 d-flex align-items-center justify-content-center text-center' ">
            <!-- <Title :text="title"/> -->
            {{ slogan }}
        </div>
    </div>

</template>

<script>

export default {
    name: 'Name',
    data() {
        return {
            name: "Pablo Contreras",
            slogan: "A challenge-loving web developer",
            title: "Who am I?",
        }
    },
    props: {
    },
    components: {
        // Title,
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
    },
}
</script>