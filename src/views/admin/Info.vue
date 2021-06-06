<template>

    <div class="">
        <div :class="' theme-'+[theme]+'-800 p-2'">
            <h5 class="">
                <Title :text="title"/>
            </h5>
            <div class="row" v-for="(value, index) in prouds" :key="index">

                <div class="col-2">
                    <i :class="[value.icon]+' p-2'" style="font-size: 1rem;"></i>
                </div>
                
                <div class="col-10">
                    <p>
                        <strong>
                            {{ value.title }}
                        </strong>
                        <br/>
                        <a v-if="value?.url" :class="'theme-'+[theme]+'-800'" :href = "value.url" target="_blank">{{ value.description }}</a>
                        <small v-else v-html="value.description"></small>
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import Title from './Title'

export default {
    name: 'Info',
    data() {
        return {
            title: "INFO",
            prouds: [
                {
                    icon: 'fas fa-envelope',
                    title: 'Email',
                    description: 'pacg1991@gmail.com',
                    url: 'mailto: pacg1991@gmail.com',
                },
                {
                    icon: 'fas fa-globe',
                    title: 'Website',
                    description: 'bypabloc.site',
                    url: 'http://bypabloc.site',
                },
                {
                    icon: 'fas fa-birthday-cake',
                    title: 'Birth Date',
                    description: '08/08/91',
                    url: 'https://calendar.google.com/event?action=TEMPLATE&tmeid=NnIyY2RtdDliM3VvOTdqbDg1NXEzZmNlczRfMTk5MTA4MDggcGFjZzE5OTFAbQ&tmsrc=pacg1991%40gmail.com&scp=ALL',
                },
                {
                    icon: 'fas fa-map-marker-alt',
                    title: 'Habitation',
                    description: 'Lima, Perú',
                    url: 'https://goo.gl/maps/BEifmkUpj5P6Wa3fA',
                },
            ],
        }
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