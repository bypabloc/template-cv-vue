<template>

    <div>
        <img class="img-fluid mx-auto d-block img-thumbnail" :src="url"/>
        <!-- https://dibal-storage.s3.us-east-2.amazonaws.com/images/img_profile.png -->
    </div>

</template>

<script>

export default {
    name: 'Picture',
    props: {
        url: String,
    },
}
</script>

<style scoped>
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

</style>