<template>

    <div>
        <img class="img-fluid mx-auto d-block img-thumbnail" :src="url"/>
        <!-- https://dibal-storage.s3.us-east-2.amazonaws.com/images/img_profile.png -->
    </div>

</template>

<script>

import { mapGetters } from "vuex";

export default {
    name: 'Picture',
    data() {
        return {
        }
    },
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
            theme: "theme",
        })
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
    },
}
</script>

<style scoped>
    img {
        width: 250px;
        border-radius: 50%;
    }

    @media (min-width: 0px) and (max-width: 150px) {
        img {
            width: 90px;
        }
    }
    @media (min-width: 151px) and (max-width: 214px) {
        img {
            width: 90px;
        }
    }

</style>