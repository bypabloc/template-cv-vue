<template>

    <!-- <div id="wrapper" class="mh-100">
        <div class="container">
        </div>
    </div> -->
    <div class="container fluid fill-height" style="background-color: rgba(0,0,255,.1);">

        <main class="col-12 mt-3 flex-fill">
            <div class="row p-3">
                <div class="col-4">
                    izq
                </div>
                <div class="col-8">
                    der
                </div>
            </div>
        </main>

        <Home/>
        <!-- <nav class="navbar navbar-expand-sm navbar-light flex-shrink-0">
            <a class="brand navbar-brand" href="/">Brand</a>
            <button class="navbar-toggler s-btn-hamburger order-first s-color-icons" aria-expanded="true" aria-controls="navbar-test" aria-label="Toggle navigation" type="button" data-target="#navbar-test" data-toggle="collapse">
                <span class="navbar-toggler-icon k-icon k-icon-md k-i-hamburger"></span>
            </button>
            <div class="navbar-collapse collapse show" id="navbar-test">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="dropdown1" aria-expanded="false" aria-haspopup="true" data-toggle="dropdown">Menu Item</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown1">
                            <a class="dropdown-item" href="#">Sub menu</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Test</a>
                    </li>
                </ul>
            </div>
        </nav> -->
    </div>

</template>

<script>

import Home from './components/Home'

export default {
    name: 'App',
    components: {
            Home,
    }
}
</script>

<style scoped>

.vh-100 {
    min-height: 100vh;
}

/* #wrapper {
    background-color: rgba(0,0,255,.1);
    width: 100% !important;
    height: 100% !important;
    min-height: 100% !important;
    display: block !important;
}  */
</style>
