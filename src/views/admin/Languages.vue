<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="row">
                <div class="col-6" v-for="(value, index) in hobbies" :key="index">
                    <div class="" v-if="!value.editing" v-on:click="value.editing = true">
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

                    <div
                        class="row" 
                        v-if="value.editing"
                    >
                        <input class="form-control col-9" v-model="value.text"
                            v-on:keyup.enter.exact="value.editing = false"
                            v-on:keyup.esc="value.editing = false"
                        >
                        <input type="range" class="form-range" min="0" max="100" step="0.5" v-model="value.percentage">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from "vuex";
import Title from './Title'

export default {
    name: 'hobbies',
    data() {
        return {
            title: "LANGUAGES",
            hobbies: [
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
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
            theme: "theme",
        })
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
    },
}
</script>
