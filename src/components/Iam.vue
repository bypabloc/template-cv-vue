<template>

    <div :class="'card'">
        <div class="card-body">
            <h5 class="card-title">
                <ins>
                    Who am I?
                </ins>
            </h5>
            <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
            <div class="card-text">
                <div v-for="(value, index) in descriptions" :key="index">
                    <p v-html="value.text"></p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'Proud',
    data() {
        return {
            theme: String,
            descriptions: [
                {
                    text: `I'm a developer born in Venezuela and CTO of <a href="https://dibal.pe">Dibal.pe</a>. I'm interested and skilled in different topics of Information Technology including programming, web development, and computer and network security.`,
                },
            ],
        }
    },
    props: {
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