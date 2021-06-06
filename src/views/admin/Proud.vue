<template>

    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <loading v-if="fetchingData"/>
            <div v-else-if="error">
                {{ error }}
            </div>
            <draggable tag="transition-group" v-else class="dragArea list-group w-full" :list="proudsTemp" :onChange="drop"> <!-- :list="proudsTemp" -->
                <div class="row" v-for="(value, index) in proudsTemp" :key="index">

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
                            <input 
                                class="m-1 form-control" 
                                placeholder="fas fa-icon"
                                v-model="value.icon"
                                v-on:keyup.enter.exact="value.editing = false; save(index);"
                                v-on:keyup.esc="value.editing = false; save(index);"
                            >
                            <input 
                                class="m-1 form-control" 
                                placeholder="Título"
                                v-model="value.title" 
                                v-on:keyup.enter.exact="value.editing = false; save(index);"
                                v-on:keyup.esc="value.editing = false; save(index);"
                            >
                            <textarea 
                                class="m-1 form-control" 
                                placeholder=""
                                v-model="value.description"
                                v-on:keyup="resizeTextarea($event)"
                                v-on:keydown="resizeTextarea($event)"
                                v-on:keyup.enter.exact="value.editing = false; save(index);"
                                v-on:keyup.esc="value.editing = false; save(index);"
                            ></textarea>
                        </div>
                    </div>

                    <div class="row col-1 d-flex align-items-center">
                        <button type="button" v-if="value.editing" v-on:click="save(index)" :class="'btn theme-bg-'+[theme]+'-200'">
                            <i :class="'fas fa-check'"></i>
                        </button>
                        <button type="button" v-on:click="remove(value.id)" :class="'btn theme-bg-'+[theme]+'-200'">
                            <i :class="'fas fa-times'"></i>
                        </button>
                    </div>
                    
                </div>
            </draggable>
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
import { VueDraggableNext } from 'vue-draggable-next'
import * as _ from "lodash";

export default {
    name: 'Proud',
    data() {
        return {
            title: "What am I proud of?",
            proudsTemp: [],
        }
    },
    computed: {
        // map `this.theme` to `this.$store.getters.theme`
        ...mapState([
            'prouds',
            'error',
            'fetchingData',
        ]),
    },
    components: {
        Title,
        Loading,
        draggable: VueDraggableNext,
    },
    watch: {
        prouds (newProuds) {
            if(newProuds){
                const prouds = [...Object.values(this.prouds)];

                const proudsReduce = prouds.reduce((old,curr) => {
                    return [...old, {
                        id: curr.id,
                        icon: curr.icon,
                        title: curr.title,
                        description: curr.description,
                    }];
                },[]);

                this.proudsTemp = _.cloneDeep(proudsReduce);
            }
        },
    },
    methods:{
        ...mapActions([
            'fetchProuds',
            'saveProud',
            'updateProud',
            'editingProud',
            'remProud',
        ]),
        add() {
            const idx = this.proudsTemp.findIndex(e => {
                return e.editing==true
            });

            /*
            this.toast({
                icon: 'success',
                title: 'Signed in successfully'
            })
            */

            if(idx>-1){
                this.swalFire({
                    title: '',
                    text: 'Tiene un item que no ha completado',
                    type: 2,
                })
                return false;
            }

            const proud = {
                icon: '',
                title: '',
                description: '',
                idx: this.proudsTemp.length,
                editing: true,
            };

            this.proudsTemp = [ ...this.proudsTemp , proud];
        },
        save(i) {
            this.saveProud( { ...this.proudsTemp[i], idx: i } );
        },
        editing(id,status) {
            this.editingProud({id,status});
        },
        remove(id) {
            this.remProud(id);
        },
        drop: function(){
            const proudsOld = [...Object.values(this.prouds)];
            const proudsNews = this.proudsTemp;

            const prouds = proudsOld.reduce((old,curr) => {
                const itemIndex = proudsNews.findIndex(e => {
                    return e.id==curr.id
                });
                const item = proudsNews[itemIndex];
                if(itemIndex!=curr.idx){
                    return [...old, {
                        id: item.id,
                        idx: itemIndex,
                    }];
                }else{
                    return old;
                }
            },[]);

            console.clear()
            console.log('prouds',prouds);
            this.updateProud(prouds);
        },
    },
    created(){
        this.fetchProuds()
    },
    mounted() {
    },
}
</script>