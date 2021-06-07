<template>
    <div>
        <div class="container-fluid ">
            <div :class="'row theme-bg-'+[theme]+'-600'">
                <main class="col-12">
                    <div class="row p-3">
                        <div :class="'col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3 col-xxl-3 theme-bg-'+[theme]+'-800 p-2'">
                            <div class="col-12">
                                Izquierda
                            </div>
                        </div>
                        <div :class="'col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9 col-xxl-9 theme-'+[theme]+'-100 p-2'">
                            Derecha
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Dashboard',
    props: {
        email: String,
    },
    components: {
    },
    data() {
        return {
        };
    },
    mounted(){
        console.clear()
        console.log('this.$route.params',this.$route.params)
        console.log('email',this.email)
    }
};
</script>
