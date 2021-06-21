<template>
    <div>
        <div class="row flex-grow-1">
            <main :class="'col p-4 flex-fill theme-'+[theme]+'-800' ">
                
                <input 
                    class="m-1 form-control" 
                    placeholder="fas fa-icon"
                    v-model="dataTemp.config.data.nickname"
                    v-on:keyup.enter.exact="value.editing = false; save(index);"
                    v-on:keyup.esc="value.editing = false; save(index);"
                >
                
            </main>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from "vuex"
import * as _ from "lodash";

export default {
    name: 'Dashboard',
    data() {
        return {
            dataTemp: {},
        }
    },
    components: {
        // Colors,
    },
    computed: {
        // map `this.user` to `this.$store.getters.user`
        ...mapState([
            'data',
        ]),
    },
    watch: {
        data (newProuds) {
            if(newProuds){
                const data = [...Object.values(this.data)];

                console.log('data',data)
                this.dataTemp = _.cloneDeep(data);
            }
        },
    },
    methods:{
        ...mapActions([
            'fetchProuds',
        ]),
        remove() {
            // this.fetchProuds(id);
        },
    },
    created(){
        const data = this.data;
        const dataNew = Object.keys(this.data).reduce((old,curr) => {
            return {
                ...old,
                ...{
                    [curr]: data[curr],
                }
            };
        },{});
        this.dataTemp = _.cloneDeep(dataNew);
    },
    mounted() {
        
        // console.log('data',data)

    },
};
</script>
