<template>

    <div>
        <div class="img-fluid mx-auto d-block container m-5">
            <loading v-if="data?.config?.fetchingData"/>
            <div v-else>
                <img v-if="image" class="img-fluid mx-auto d-block img-thumbnail" :src="image"/>
                <img v-else-if="data?.config?.data?.img && !data?.config?.fetchingData" class="img-fluid mx-auto d-block img-thumbnail" :src="data?.config?.data?.img"/>
                <img v-else class="img-fluid mx-auto d-block img-thumbnail" src="@/assets/profile_not_fount.png"/>
                <!-- <img class="img-fluid mx-auto d-block img-thumbnail" src="../../assets/profile_not_fount.png"/> -->
                <button v-if="editing" type="button" @click="save" :class="'save btn theme-color-'+[theme]+'-200'">
                    <span class="fa-stack"> 
                        <i class="fas fa-save fa-stack-2x"></i>
                        <i class="fas fa-plus fa-stack-1x " :class="'btn theme-color-'+[theme]+'-200'"></i>
                    </span>
                </button>
                <button v-if="data?.config?.data?.img || editing" type="button" @click="cancel" :class="'del btn theme-color-'+[theme]+'-200'">
                    <span class="fa-stack"> 
                        <i class="fas fa-times fa-stack-2x"></i>
                        <i class="fas fa-plus fa-stack-1x " :class="'btn theme-color-'+[theme]+'-200'"></i>
                    </span>
                </button>
                
                <label v-if="!editing" :class="'custom-file-upload file btn theme-color-'+[theme]+'-200'">
                    <span class="fa-stack"> 
                        <i class="fas fa-camera fa-stack-2x"></i>
                        <i :class="'fas fa-plus fa-stack-1x theme-color-'+[theme]+'-200'"></i>
                    </span>
                    <input type="file" @change="onFileChange" accept="image/*"/>
                </label>
            </div>
        </div>
        <!-- https://dibal-storage.s3.us-east-2.amazonaws.com/images/img_profile.png -->
    </div>

</template>

<script>

import { mapState, mapActions } from "vuex";
import Loading from '@/components/Loading'

export default {
    name: 'Picture',
    data() {
        return {
            // image: 'https://firebasestorage.googleapis.com/v0/b/template-cv-vue.appspot.com/o/profile_img%2Fprofile_not_fount.png?alt=media&token=fff689a6-6f36-4500-b351-5a0e883fce82',
            image: null,
            imageDefault: '../../assets/profile_not_fount.png',
            editing: false,
        }
    },  
    components:{
        Loading,
    },
    computed: {
        // map `this.theme` to `this.$store.getters.theme`
        ...mapState([
            'data',
        ]),
    },
    methods:{
        ...mapActions([
            // 'fetchConfig',
            'saveImg',
            'remConfig',
        ]),
        onFileChange(e) {
            console.log('this.data',this.data)
            console.log('this.data?.config?.data?.img',this.data?.config?.data?.img)
            console.log('this.data?.config?.fetchingData',this.data?.config?.fetchingData)
            
            
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            const reader = new FileReader();
            const vm = this;
            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
            this.editing = true;
        },
        save() {
            this.saveImg({img:this.image})
            this.editing = false;
        },
        cancel() {
            if(this.image){
                this.image = null;
            }else{
                console.log('cancel')
            }
            this.editing = false;
            console.log('image',this.image)
        },
    },
    /*
    created(){
        this.fetchConfig()
    },
    */
}
</script>

<style scoped>
    span i:not(:first-child){
        margin-top:-15px;
        margin-left:-15px;
    }
    img {
        width: 250px;
        border-radius: 50%;
    }

    @media (min-width: 0px) and (max-width: 150px) {
        img {
            width: 90px;
        }
    }
    @media (min-width: 151px) and (max-width: 214px) {
        img {
            width: 90px;
        }
    }

    .container {
        position: relative;
        width: 50%;
    }

    .container img {
        width: 100%;
        height: auto;
    }

    .container .file {
        position: absolute;
        top: 90%;
        left: 90%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-size: 16px;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    .container .save {
        position: absolute;
        top: 90%;
        left: 90%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-size: 16px;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    .container .del {
        position: absolute;
        top: 10%;
        left: 90%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        font-size: 16px;
        padding: 12px 24px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }

    input[type="file"] {
        display: none;
    }
    .custom-file-upload {
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
    }

</style>