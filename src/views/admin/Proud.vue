<template>

    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <span v-if="fetchingData">Cargando...</span>
            <div v-else class="row" v-for="(value, index) in prouds" :key="index.id">
                <div class="col-1">
                    <i :class="[value.icon]+' theme-color-'+[theme]+'-800 p-2'" style="font-size: 2rem;"></i>
                </div>
                
                <div class="row col-11">
                    <div class="col-11">
                        <p v-if="!value.editing" v-on:click="value.editing = true">
                            <strong>
                                {{ value.title }}
                            </strong>
                            <br/>
                            <small v-html="value.description">
                            </small>
                        </p>
                        

                        <div class="row" v-if="value.editing">
                            <input class="m-1 form-control" v-model="value.icon"
                                placeholder="fas fa-icon"
                                @keyup.enter.exact="value.editing = false"
                                v-on:keyup.esc="value.editing = false"
                            >
                            <input class="m-1 form-control" v-model="value.title" 
                                placeholder="Título"
                                @keyup.enter.exact="value.editing = false"
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
                        <button type="button" v-on:click="remove(index)" :class="'btn theme-bg-'+[theme]+'-200'">
                            <i :class="'fas fa-times'"></i>
                        </button>
                    </div>
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

import { mapGetters, mapState, mapActions } from "vuex";
import Title from './Title'

export default {
    name: 'Proud',
    data() {
        return {
            title: "What am I proud of?",
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
        // map `this.user` to `this.$store.getters.user`
        ...mapGetters({
            theme: "theme",
        }),
        ...mapState([
            'prouds',
            'fetchingData',
        ]),
    },
    props: {
    },
    components: {
        Title,
    },
    methods:{
        ...mapActions([
            'fetchProuds',
            'addProud',
            'remProud',
        ]),
        add() {
            console.clear();
            console.log('this.prouds',this.prouds)
            this.addProud(
                {
                    icon: '',
                    title: '',
                    description: '',
                },
            );

            /*
            this.addProud(
                {
                    icon: '',
                    title: '',
                    description: '',
                },
            );
            console.log('this.prouds',this.prouds)
            */
        },
        remove(i) {
            console.clear();
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