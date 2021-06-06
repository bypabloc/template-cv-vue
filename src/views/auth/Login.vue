<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Login
                    </div>
                    <div class="card-body">
                        <div v-if="user.error" class="alert alert-danger">
                            {{user.error}}
                        </div>
                        <form action="#" @submit.prevent="submit">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input
                                    id="email"
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    value
                                    required
                                    autofocus
                                    v-model="form.email"
                                    aria-describedby="emailHelp"
                                />
                                <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    class="form-control"
                                    name="password"
                                    required
                                    v-model="form.password"
                                />
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            form: {
                email: "pacg1991@gmail.com",
                password: "12345678",
            },
        };
    },
    computed: {
        // map `this.theme` to `this.$store.getters.theme`
        ...mapState([
            'user',
        ]),
    },
    methods:{
        ...mapActions([
            'login',
        ]),
        submit() {
            this.login(
                {
                    email: this.form.email,
                    password: this.form.password,
                },
            );
        },
    },
};
</script>