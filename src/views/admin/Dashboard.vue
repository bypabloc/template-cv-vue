<template>
    <div>
        <div class="container-fluid ">
            <div :class="'row theme-bg-'+[theme]+'-600'">
                <main class="col-12">
                    <div class="row p-3">
                        <div :class="'col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 col-xxl-3 theme-bg-'+[theme]+'-800 p-2'">
                            <div class="col-12">

                                <picture-profile class="pt-2" url="https://dibal-storage.s3.us-east-2.amazonaws.com/images/img_profile.png"/>

                                <name/>

                                <info/>
                                <socials/>
                                <hobbies/>

                            </div>
                        </div>
                        <div :class="'col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9 col-xxl-9 theme-'+[theme]+'-100 p-2'">
                            <iam/>
                            <proud/>
                            <education/>
                            <skills/>
                            <languages/>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import name from './Name'
import iam from './Iam'
import proud from './Proud'
import education from './Education'
import skills from './Skills'
import info from './Info'
import socials from './Socials'
import hobbies from './Hobbies'
import PictureProfile from './Picture'
import languages from './Languages'

export default {
    name: 'Dashboard',
    components: {
        // Colors,
        skills,
        education,
        proud,
        name,
        iam,
        info,
        socials,
        hobbies,
        languages,
        PictureProfile,
    },
    methods: {
        resizeTextarea (event) {
            event.target.style.height = (event.target.scrollHeight) + 'px'
        },
    },
};
</script>
