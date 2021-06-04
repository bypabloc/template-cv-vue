<template>

    <ins>
        {{ text }}
    </ins>

</template>

<script>

import { mapGetters } from "vuex";

export default {
    name: 'Title',
    props: {
        text: String,
    },
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
            theme: "theme",
        })
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