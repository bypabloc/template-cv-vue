<template>

    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">
                <Title :text="title"/>
            </h5>
            <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
            <div class="card-text">
                <div v-for="(value, index) in descriptions" :key="index">
                    <p v-html="value.text" v-if="!value.editing" v-on:click="value.editing = true"></p>
                    <textarea 
                        v-if="value.editing" 
                        v-model="value.text"
                        v-on:keyup="resizeTextarea($event)"
                        v-on:keydown="resizeTextarea($event)"
                        v-on:keyup.enter.exact="value.editing = false"
                        v-on:keyup.esc="value.editing = false"
                        v-on:blur="value.editing = false"
                        class="form-control" 
                        placeholder="Descripcion de ti"
                    ></textarea>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import Title from './Title'

export default {
    name: 'Proud',
    data() {
        return {
            title: "Who am I?",
            descriptions: [
                {
                    text: `I'm a developer born in Venezuela and CTO of <a href="https://dibal.pe">Dibal.pe</a>. I'm interested and skilled in different topics of Information Technology including programming, web development, and computer and network security.`,
                    editing: false,
                },
            ],
        }
    },
    components: {
        Title,
    },
    methods:{
    },
}
</script>