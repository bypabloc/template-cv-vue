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
                    <p v-if="!value.editing" v-on:click="value.editing = true">
                        <strong>
                            {{ value.title }}
                        </strong>
                        <br/>
                        <small v-html="value.description">
                        </small>
                    </p>
                    

                    <div v-if="value.editing">
                        <input class="form-control" v-model="value.icon"
                            @keyup.enter.exact="value.editing = false"
                            v-on:keyup.esc="value.editing = false"
                        >
                        <input class="form-control" v-model="value.title"
                            @keyup.enter.exact="value.editing = false"
                            v-on:keyup.esc="value.editing = false"
                        >
                        <textarea 
                            v-model="value.description"
                            v-on:keyup="resizeTextarea($event)"
                            v-on:keydown="resizeTextarea($event)"
                            v-on:keyup.enter.exact="value.editing = false"
                            v-on:keyup.esc="value.editing = false"
                            class="form-control" 
                            placeholder="Descripcion de ti"
                        ></textarea>
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
    name: 'Proud',
    data() {
        return {
            title: "What am I proud of?",
            prouds: [
                {
                    icon: 'fas fa-chart-line',
                    title: 'Having started with a StartUp from scratch until it is self-sustaining (Dibal.pe).',
                    description: 'For having been the first programmer.<br/>For having fought to make it grow.<br/>For having fought against the pandemic and not giving up with all the cons that were presented to us.<br/>For my leadership in each new member of the team.',
                    editing: false,
                },
                {
                    icon: 'fas fa-graduation-cap',
                    title: 'Have graduated as an Informatics Engineer.',
                    description: 'The pride of having exceeded one goal, of so many, of my life.',
                    editing: false,
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