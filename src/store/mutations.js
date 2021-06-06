import Vue from 'vue'
import * as types from './mutations-types'
import router from '@/router'

export default {

    [types.USER_LOGGED_IN] (state, value){
        state.user.loggedIn = value;
    },
    [types.USER_REGISTER_FAILURE] (state, error ){
        state.user.data = null;
        state.user.loggedIn = null;
        state.user.register.error = error;
        localStorage.removeItem('user')
    },
    [types.USER_LOGIN_FAILURE] (state, error ){
        state.user.data = null;
        state.user.loggedIn = null;
        state.user.error = error;
        state.user.register.error = null;

        localStorage.removeItem('user')
    },
    [types.USER_LOGIN] (state, { displayName , email, uid } ){
        state.user.error = null;
        state.user.register.error = null;
        state.user.data = { displayName , email, uid };
        state.user.loggedIn = true;
        localStorage.setItem('user', JSON.stringify({ displayName , email, uid }))
        router.push({ name: "dashboard" });
    },
    [types.USER_LOGOUT] (state){
        state.user.error = null;
        state.user.register.error = null;
        state.user.data = null;
        state.user.loggedIn = null;
        // router.push('/')
        localStorage.removeItem('user')
        router.push({ name: "/" });
    },
    [types.USER] (state, data){
        state.user.data = data;
        localStorage.setItem('user', JSON.stringify(data))
    },

    // fetching prouds
    [types.FETCH_PROUDS_REQUEST] (state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_PROUDS_SUCCESS] (state, { prouds }){
        state.fetchingData = false
        state.error = null
        state.prouds = Object.assign( {}, state.prouds, prouds )
        // state.prouds = { ...prouds }
    },
    [types.FETCH_PROUDS_FAILURE] (state, { error }){
        state.fetchingData = false
        state.error = error
    },

    // fetching educations
    [types.FETCH_EDUCATIONS_REQUEST] (state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_EDUCATIONS_SUCCESS] (state, { educations }){
        state.fetchingData = false
        state.error = null
        state.educations = { ...educations }
    },
    [types.FETCH_EDUCATIONS_FAILURE] (state, { error }){
        state.fetchingData = false
        state.error = error
    },

    // fetching skills
    [types.FETCH_SKILLS_REQUEST] (state){
        state.fetchingData = true
        state.error = null
    },
    [types.FETCH_SKILLS_SUCCESS] (state, { skills }){
        state.fetchingData = false
        state.error = null
        state.skills = { ...skills }
    },
    [types.FETCH_SKILLS_FAILURE] (state, { error }){
        state.fetchingData = false
        state.error = error
    },

    [types.ADD_PROUD] (state, proud ){
        state.prouds = [ ...Object.values(state.prouds) , {
            ...proud,
            'editing': true,
        }]
    },
    [types.EDITING_PROUD] ( state, {id, status} ){
        const prouds = Object.values(state.prouds)

        const index = prouds.findIndex(e => {
            return e.id == id
        });
        prouds[index]['editing'] = status;

        state.prouds = prouds;
    },
    [types.REM_PROUD] ( state, proud_id ){
        state.prouds = Object.values(state.prouds)
            .filter(proud => proud.id !== proud_id)
    },

    [types.ADD_EDUCATION] (state, { education }){
        Vue.set(state.educations, education.id, education )
    },
    [types.ADD_SKILL] (state, { skill }){

        Vue.set(state.skills, skill.id, skill )
    },
    
}
