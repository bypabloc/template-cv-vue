<template>

    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="row" v-for="(value, index) in prouds" :key="index">
                <div class="col-1">
                    <i :class="[value.icon]+' theme-color-'+[theme]+'-800 p-2'" style="font-size: 2rem;"></i>
                </div>
                
                <div class="col-11">
                    <p>
                        <strong>
                            {{ value.title }}
                        </strong>
                        <br/>
                        <small v-html="value.description">
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
    name: 'Proud',
    data() {
        return {
            theme: String,
            title: "What am I proud of?",
            prouds: [
                {
                    icon: 'fas fa-chart-line',
                    title: 'Having started with a StartUp from scratch until it is self-sustaining (Dibal.pe).',
                    description: 'For having been the first programmer.<br/>For having fought to make it grow.<br/>For having fought against the pandemic and not giving up with all the cons that were presented to us.<br/>For my leadership in each new member of the team.',
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'Have graduated as an Informatics Engineer.',
                    description: 'The pride of having exceeded one goal, of so many, of my life.',
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