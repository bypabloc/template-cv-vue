<template>

    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <loading v-if="fetchingData"/>
            <div v-else class="row" v-for="(value, index) in proudsTemp" :key="index">

                <div class="row col-11">
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
import Loading from '@/components/Loading'
import * as _ from "lodash";

export default {
    name: 'Proud',
    data() {
        return {
            title: "What am I proud of?",
            proudsTemp: [],
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
            'prouds',
            'fetchingData',
        ]),
    },
    components: {
        Title,
        Loading,
    },
    watch: {
        fetchingData (newProuds) {
            if(!newProuds){
                const data = [...Object.values(this.prouds)].reduce(( old, curr ) => {
                    return [...old, {
                        id: curr?.id,
                        icon: curr?.icon,
                        description: curr?.description,
                        title: curr?.title,
                    }];
                },[]);
                this.proudsTemp = _.cloneDeep(data);

            }
        },
        /*
        prouds (newProuds) {
            if(newProuds){
                this.proudsTemp = _.cloneDeep({...this.prouds});
            }
        },
        */
    },
    methods:{
        ...mapActions([
            'fetchProuds',
            'addProud',
            'editingProud',
            'remProud',
        ]),
        add() {

            const found = [...Object.values(this.proudsTemp)].find(e => {
                return e.editing==true
            });
            console.log(found)

            /*
            this.toast({
                icon: 'success',
                title: 'Signed in successfully'
            })
            */

            if(found){
                this.swalFire({
                    title: '',
                    text: 'Tiene un item que no ha completado',
                    type: 2,
                })
                return false;
            }

            this.proudsTemp = [ ...Object.values(this.proudsTemp) , {
                icon: '',
                title: '',
                description: '',
                editing: true,
            }];
            /*
            this.addProud(
                {
                    icon: '',
                    title: '',
                    description: '',
                },
            );
            */
        },
        update(id) {
            console.clear();
            console.log('this.prouds',this.prouds)
            console.log('{id}',{id});
        },
        editing(id,status) {
            this.editingProud({id,status});
        },
        remove(id) {
                
            console.clear();
            console.log('this.prouds',this.prouds)
            console.log('id',id);
            this.remProud(id);

            this.proudsTemp = Object.values(this.proudsTemp)
                .filter(proud => proud.id !== id)
        },
    },
    created(){
        this.fetchProuds()
    },
    mounted() {
    },
}
</script>