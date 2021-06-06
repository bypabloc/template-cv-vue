<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="row">
                <div class="row col-5 m-2" v-for="(value, index) in languages" :key="index">
                    <div class="row col-11" v-if="!value.editing" v-on:click="value.editing = true">
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

                    <div
                        class="row col-11" 
                        v-if="value.editing"
                    >
                        <input class="form-control m-1 col-12" v-model="value.text"
                            placeholder="Language"
                            v-on:keyup.enter.exact="value.editing = false"
                            v-on:keyup.esc="value.editing = false"
                        >
                        <input type="range" class="form-range m-1 col-12" min="0" max="100" step="0.5" v-model="value.percentage">

                    </div>

                    <div class="col-1 d-flex align-items-center">
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
    name: 'languages',
    data() {
        return {
            title: "LANGUAGES",
            languages: [
                {
                    text: 'Spanish',
                    percentage: 100,
                },
                {
                    text: 'English',
                    percentage: 60,
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
        add() {
            this.languages.push(
                {
                    icon: '',
                    text: '',
                    percentage: 0,
                    editing: true,
                },
            );
        },
        remove(i) {
            this.languages.splice(i,1);
        },
    },
    created(){
    },
    mounted() {
    },
}
</script>
