<template>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>

            <draggable class="dragArea list-group w-full" :list="education">
                <div class="row" v-for="(value, index) in education" :key="index">
                    <div class="col-11" v-if="!value.editing" v-on:click="value.editing = true">
                        <div class="row">
                            <div class="col-3">
                                Hasta: <span class="col-6">{{ moment(value.range.end, 'DD-MM-YYYY').format('DD/MM/YYYY') }}</span>
                                Desde: <span class="col-6">{{ moment(value.range.start, 'DD-MM-YYYY').format('DD/MM/YYYY') }}</span>
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
                    </div>
                    <div
                        class="col-11" 
                        v-if="value.editing"
                        v-on:blur="handleBlur"
                    >
                        <div class="row">
                            <div class="col-3">
                                <date-picker v-model="value.range" :masks="masks" :model-config="modelConfig" is-range>
                                    <template v-slot="{ inputValue, inputEvents }">
                                        <div class="flex">
                                            <input
                                                :value="moment(inputValue.end, 'DD-MM-YYYY').format('DD/MM/YYYY')"
                                                v-on:keyup.enter.exact="value.editing = false"
                                                v-on:keyup.esc="value.editing = false"
                                                v-on="inputEvents.end"
                                                class="form-control m-1"
                                            />
                                            <input
                                                :value="moment(inputValue.start, 'DD-MM-YYYY').format('DD/MM/YYYY')"
                                                v-on:keyup.enter.exact="value.editing = false"
                                                v-on:keyup.esc="value.editing = false"
                                                v-on="inputEvents.start"
                                                class="form-control m-1"
                                            />
                                        </div>
                                    </template>
                                </date-picker>
                            </div>
                            <div class="col-8">
                                <input class="form-control m-1" v-model="value.title"
                                    v-on:keyup.enter.exact="value.editing = false"
                                    v-on:keyup.esc="value.editing = false"
                                    placeholder="Título"
                                >
                                <textarea 
                                    v-model="value.description"
                                    v-on:keyup="resizeTextarea($event)"
                                    v-on:keydown="resizeTextarea($event)"
                                    v-on:keyup.enter.exact="value.editing = false"
                                    v-on:keyup.esc="value.editing = false"
                                    
                                    class="form-control m-1" 
                                    placeholder=""
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row col-1 d-flex align-items-center">
                        <button type="button" v-on:click="addUp(index)" :class="'m-1 btn theme-bg-'+[theme]+'-200'">
                            <i :class="'fas fa-arrow-up'"></i>
                        </button>
                        <button type="button" v-on:click="remove(index)" :class="'m-1 btn theme-bg-'+[theme]+'-200'">
                            <i :class="'fas fa-times'"></i>
                        </button>
                        <button type="button" v-on:click="addDown(index)" :class="'m-1 btn theme-bg-'+[theme]+'-200'">
                            <i :class="'fas fa-arrow-down'"></i>
                        </button>
                    </div>
                </div>
                <div class="pt-2 d-flex justify-content-center">
                    <button type="button" v-on:click="add" :class="'btn theme-bg-'+[theme]+'-200'">
                        <i :class="'fas fa-plus'"></i>
                    </button>
                </div>
            </draggable>
        </div>
    </div>
</template>

<script>

import Title from './Title'
import { DatePicker } from 'v-calendar';
import { VueDraggableNext } from 'vue-draggable-next'

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
    components: {
        Title,
        DatePicker,
        draggable: VueDraggableNext,
    },
    methods:{
        add() {
            this.education.push(
                {
                    range: {
                        start: '01-06-2020',
                        end: '14-05-2021',
                    },
                    title: '',
                    description: '',
                    finished: true,
                    editing: true,
                },
            );
        },
        remove(i) {
            this.education.splice(i,1);
        },
        addUp(i) {
            this.education.splice( i, 0, 
                {
                    range: {
                        start: '01-06-2020',
                        end: '14-05-2021',
                    },
                    title: '',
                    description: '',
                    finished: true,
                    editing: true,
                }
            );
        },
        addDown(i) {
            this.education.splice( i+1, 0, 
                {
                    range: {
                        start: '01-06-2020',
                        end: '14-05-2021',
                    },
                    title: '',
                    description: '',
                    finished: true,
                    editing: true,
                }
            );
        },
    },
    created(){
        this.moment = moment;
    },
    mounted() {
    },
}
</script>