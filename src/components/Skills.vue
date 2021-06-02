<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="row">
                <div class="col-6" v-for="(value, index) in skills" :key="index">
                    <i :class="[value.icon]+' theme-color-'+[theme]+'-800 p-2'" style="font-size: 1rem;"></i>
                    {{ value.text }}
                    <div class="progress" style="height: 3px;">
                        <div :class="'progress-bar theme-bg-'+[theme]+'-800'" role="progressbar" 
                            :style="{
                                width: `${value.percentage}%`
                            }"
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import Title from './Title'

export default {
    name: 'Skills',
    data() {
        return {
            theme: String,
            title: "Skills and Expertize",
            skills: [
                {
                    icon: 'fab fa-js',
                    text: 'JavaScript',
                    percentage: 75,
                },
                {
                    icon: 'fab fa-vuejs',
                    text: 'VueJS Framework',
                    percentage: 60,
                },
                {
                    icon: 'fab fa-php',
                    text: 'PHP',
                    percentage: 75,
                },
                {
                    icon: 'fab fa-laravel',
                    text: 'Laravel Framework',
                    percentage: 70,
                },
                {
                    icon: 'fab fa-git',
                    text: 'Git',
                    percentage: 75,
                },
                {
                    icon: 'fab fa-github',
                    text: 'GitHub',
                    percentage: 75,
                },
                {
                    icon: 'fab fa-ubuntu',
                    text: 'Ubuntu Server',
                    percentage: 60,
                },
                {
                    icon: 'fab fa-aws',
                    text: 'Amazon Web Services',
                    percentage: 40,
                },
                {
                    icon: 'fab fa-centos',
                    text: 'CentOS',
                    percentage: 30,
                },
                {
                    icon: 'fab fa-html5',
                    text: 'HTML 5',
                    percentage: 60,
                },
                {
                    icon: 'fab fa-css3',
                    text: 'CSS 3',
                    percentage: 20,
                },
                {
                    icon: 'fab fa-sass',
                    text: 'SASS',
                    percentage: 20,
                },
                {
                    icon: 'fas fa-fire',
                    text: 'Firebase',
                    percentage: 10,
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