<template>

    <ins>
        {{ text }}
    </ins>

</template>

<script>

export default {
    name: 'Title',
    props: {
        text: String,
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