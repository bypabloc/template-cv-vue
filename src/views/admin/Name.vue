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

import { mapGetters } from "vuex";

export default {
    name: 'Name',
    data() {
        return {
            name: "Pablo Contreras",
            slogan: "A challenge-loving web developer",
            title: "Who am I?",
        }
    },
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
            theme: "theme",
        })
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