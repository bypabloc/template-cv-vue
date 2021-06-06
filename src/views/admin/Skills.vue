<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="row">
                <div class="col-6 d-flex" v-for="(value, index) in skills" :key="index">
                    <div class="row col-11" v-if="!value.editing" v-on:click="value.editing = true">
                        <div class="col-12">
                            <div class="row">
                                <i :class="[value.icon]+' col-2 theme-color-'+[theme]+'-800 p-2'" style="font-size: 1rem;"></i>
                                <div class="col-10">{{ value.text }}</div>
                                <div class="progress col-12" style="height: 3px;">
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

                    <div
                        class="row col-11" 
                        v-if="value.editing"
                    >
                        <i :class="[value.icon]+' col-2 theme-color-'+[theme]+'-800 p-2'" style="font-size: 1rem;"></i>
                        <input class="form-control col-8" v-model="value.icon"
                            placeholder="Icon"
                            v-on:keyup.enter.exact="value.editing = false"
                            v-on:keyup.esc="value.editing = false"
                        >
                        <input class="form-control m-1 col-10" v-model="value.text"
                            placeholder="Skill"
                            v-on:keyup.enter.exact="value.editing = false"
                            v-on:keyup.esc="value.editing = false"
                        >
                        <input type="range" class="form-range m-1 col-10" min="0" max="100" step="0.5" v-model="value.percentage">

                    </div>

                    <div class="col-1">
                        <button type="button" v-on:click="remove(index)" :class="'btn theme-bg-'+[theme]+'-200'">
                            <i :class="'fas fa-times'"></i>
                        </button>
                    </div>
                </div>
                <div class="pt-2 d-flex justify-content-center">
                    <button type="button" v-on:click="add" :class="'btn theme-bg-'+[theme]+'-200'">
                        <i :class="'fas fa-plus'"></i>
                    </button>
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
            title: "Skills and Expertize",
            skills: [
                {
                    icon: 'fab fa-js',
                    text: 'JavaScript',
                    percentage: 75,
                    editing: false,
                },
                {
                    icon: 'fab fa-vuejs',
                    text: 'VueJS Framework',
                    percentage: 60,
                    editing: false,
                },
                {
                    icon: 'fab fa-php',
                    text: 'PHP',
                    percentage: 75,
                    editing: false,
                },
                {
                    icon: 'fab fa-laravel',
                    text: 'Laravel Framework',
                    percentage: 70,
                    editing: false,
                },
                {
                    icon: 'fab fa-git',
                    text: 'Git',
                    percentage: 75,
                    editing: false,
                },
                {
                    icon: 'fab fa-github',
                    text: 'GitHub',
                    percentage: 75,
                    editing: false,
                },
                {
                    icon: 'fab fa-ubuntu',
                    text: 'Ubuntu Server',
                    percentage: 60,
                    editing: false,
                },
                {
                    icon: 'fab fa-aws',
                    text: 'Amazon Web Services',
                    percentage: 40,
                    editing: false,
                },
                {
                    icon: 'fab fa-centos',
                    text: 'CentOS',
                    percentage: 30,
                    editing: false,
                },
                {
                    icon: 'fab fa-html5',
                    text: 'HTML 5',
                    percentage: 60,
                    editing: false,
                },
                {
                    icon: 'fab fa-css3',
                    text: 'CSS 3',
                    percentage: 20,
                    editing: false,
                },
                {
                    icon: 'fab fa-sass',
                    text: 'SASS',
                    percentage: 20,
                    editing: false,
                },
                {
                    icon: 'fas fa-fire',
                    text: 'Firebase',
                    percentage: 10,
                    editing: false,
                },
            ],
        }
    },
    components: {
        Title,
    },
    methods:{
        add() {
            this.skills.push(
                {
                    icon: '',
                    text: '',
                    percentage: 0,
                    editing: true,
                },
            );
        },
        remove(i) {
            this.skills.splice(i,1);
        },
    },
}
</script>