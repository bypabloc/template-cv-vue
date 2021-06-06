<template>

    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <span v-if="fetchingData">Cargando...</span>
            <div v-else class="row" v-for="(value, index) in proudsCopied" :key="index">

                <div class="row col-11" v-if="!value.editing">
                    <div class="col-1">
                        <i :class="[value.icon]+' theme-color-'+[theme]+'-800 p-2'" style="font-size: 2rem;"></i>
                    </div>
                    <div class="col-11" v-if="!value.editing">
                        <p v-on:click="value.editing = true">
                            <strong>
                                {{ value.title }}
                            </strong>
                            <br/>
                            <small v-html="value.description">
                            </small>
                        </p>
                    </div>
                </div>

                <div class="col-11" v-if="value.editing">
                    <input class="m-1 form-control" 
                        v-model="value.icon"
                        placeholder="fas fa-icon"
                        v-on:keyup.enter.exact="value.editing = false"
                        v-on:keyup.esc="value.editing = false"
                    >
                    <input class="m-1 form-control" v-model="value.title" 
                        placeholder="Título"
                        v-on:keyup.enter.exact="value.editing = false"
                        v-on:keyup.esc="value.editing = false"
                    >
                    <textarea 
                        class="m-1 form-control" 
                        v-model="value.description"
                        v-on:keyup="resizeTextarea($event)"
                        v-on:keydown="resizeTextarea($event)"
                        v-on:keyup.enter.exact="value.editing = false"
                        v-on:keyup.esc="value.editing = false"
                        placeholder=""
                    ></textarea>
                </div>

                <div class="col-1 d-flex align-items-center">
                    <button type="button" v-on:click="remove(value.id)" :class="'btn theme-bg-'+[theme]+'-200'">
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

</template>

<script>

import { mapState, mapActions } from "vuex";
import Title from './Title'
import * as _ from "lodash";

export default {
    name: 'Proud',
    data() {
        return {
            title: "What am I proud of?",
            proudsCopied: [],
            /*
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
            */
        }
    },
    computed: {
        // map `this.theme` to `this.$store.getters.theme`
        ...mapState([
            'theme',
            'prouds',
            'fetchingData',
        ]),
    },
    components: {
        Title,
    },
    watch: {
        fetchingData (newCount) {
            if(!newCount){
                this.proudsCopied = _.cloneDeep({...this.prouds});
            }
        },
        prouds (newCount) {
            console.log('newCount',newCount)
        },
    },
    methods:{
        ...mapActions([
            'fetchProuds',
            'addProud',
            'editingProud',
            'remProud',
        ]),
        add() {
            console.clear();
            this.addProud(
                {
                    icon: '',
                    title: '',
                    description: '',
                },
            );
        },
        update(id) {
            console.clear();
            console.log('this.prouds',this.prouds)
            console.log('{id}',{id});
        },
        editing(id,status) {
            this.editingProud({id,status});
        },
        remove(i) {
            console.clear();
            console.log('this.prouds',this.prouds)
            console.log('i',i);
            this.remProud(i);
        },
    },
    created(){
        this.fetchProuds()
    },
    mounted() {
    },
}
</script>