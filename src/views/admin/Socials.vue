<template>

    <div class="">
        <div :class="' theme-'+[theme]+'-800 p-2'">
            <h5 class="">
                <Title :text="title"/>
            </h5>
            <div class="row" v-for="(value, index) in socials" :key="index">

                <div class="col-2">
                    <i :class="[value.icon]+' p-2'" style="font-size: 1rem;"></i>
                </div>
                
                <div class="col-10">
                    <p>
                        <small >
                            <a :class="'theme-'+[theme]+'-800'" :href="value.url" target="_blank">{{ value.text }}</a>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import Title from './Title'

export default {
    name: 'socials',
    data() {
        return {
            title: "SOCIALS",
            socials: [
                {
                    icon: 'fab fa-github',
                    url: 'https://github.com/bypabloc',
                    text: 'github.com/bypabloc',
                },
                {
                    icon: 'fab fa-linkedin',
                    url: 'https://www.linkedin.com/in/bypabloc/',
                    text: 'linkedin.com/in/bypabloc/',
                },
                {
                    icon: 'fab fa-twitter',
                    url: 'https://twitter.com/bypabloc',
                    text: 'twitter.com/bypabloc',
                },
                {
                    icon: 'fab fa-instagram',
                    url: 'https://www.instagram.com/bypabloc_/',
                    text: 'instagram.com/bypabloc_/',
                },
            ],
            
        }
    },
    components: {
        Title,
    },
}
</script>