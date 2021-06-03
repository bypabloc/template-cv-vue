<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="row" v-for="(value, index) in education" :key="index">
                <div class="col-3">
                    {{ value.start }} - {{ value.end }}
                </div>
                <div class="col-9">
                    <p>
                        <strong>
                            {{ value.title }}
                        </strong>
                        <br>
                        <small>
                            {{ value.description }}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Title from './Title'

export default {
    name: 'Education',
    data() {
        return {
            theme: String,
            title: "Education",
            education: [
                {
                    start: '2011',
                    end: '2016',
                    title: 'Informatics Engineer',
                    description: 'IUTAB University. Learn the basics of technology.',
                    finished: true,
                },
            ],
        }
    },
    props: {
    },
    components: {
        Title,
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