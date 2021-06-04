<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <div class="row" v-for="(value, index) in education" :key="index">
                <div class="row" v-if="!value.editing" v-on:click="value.editing = true">
                    <div class="col-3">
                        {{ moment(value.range.start, 'DD-MM-YYYY').format('DD/MM/YYYY') }}
                        -
                        {{ moment(value.range.end, 'DD-MM-YYYY').format('DD/MM/YYYY') }}
                    </div>
                    <div class="col-9">
                        <p>
                            <strong>
                                {{ value.title }}
                            </strong>
                            <br>
                            <small>
                                {{ value.description }}
                            </small>
                        </p>
                    </div>
                </div>
                <div
                    class="row" 
                    v-if="value.editing"
                    v-on:blur="handleBlur"
                >
                    <div class="col-3">

                        <date-picker v-model="value.range" :masks="masks" :model-config="modelConfig" is-range>
                            <template v-slot="{ inputValue, inputEvents }">
                                <div class="flex justify-center items-center">
                                    <input
                                        :value="moment(inputValue.start, 'DD-MM-YYYY').format('DD/MM/YYYY')"
                                        v-on:keyup.enter.exact="value.editing = false"
                                        v-on:keyup.esc="value.editing = false"
                                        v-on="inputEvents.start"
                                        class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
                                    />
                                    -
                                    <input
                                        :value="moment(inputValue.end, 'DD-MM-YYYY').format('DD/MM/YYYY')"
                                        v-on:keyup.enter.exact="value.editing = false"
                                        v-on:keyup.esc="value.editing = false"
                                        v-on="inputEvents.end"
                                        class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
                                    />
                                </div>
                            </template>
                        </date-picker>

                    </div>
                    <div class="col-9">
                        <input class="form-control" v-model="value.title"
                            v-on:keyup.enter.exact="value.editing = false"
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
import { DatePicker } from 'v-calendar';

import moment from 'moment';
moment.locale('es');

export default {
    name: 'Education',
    data() {
        return {
            title: "Education",
            education: [
                {
                    range: {
                        start: '06-07-2020',
                        end: '30-07-2020',
                    },
                    title: 'Informatics Engineer',
                    description: 'IUTAB University. Learn the basics of technology.',
                    finished: true,
                    editing: false,
                },
                {
                    range: {
                        start: '12-07-2020',
                        end: '17-07-2020',
                    },
                    title: 'Curso Udemy - Laravel',
                    description: 'Laravel para procitos xD.',
                    finished: true,
                    editing: false,
                },
            ],
            modelConfig: {
                type: 'string',
                mask: 'DD-MM-YYYY',
            },
            masks: {
                input: 'DD-MM-YYYY',
            },
            locale: 'es-ES',
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
        DatePicker,
    },
    methods:{
        test: () => {
            return "#";
        },
        
        handleBlur(e) {
            console.log('blur', e.target.placeholder)
        },
    },
    created(){
        this.moment = moment;
    },
    mounted() {
        this.test();
    },
}
</script>