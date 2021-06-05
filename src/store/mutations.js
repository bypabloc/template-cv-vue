import Vue from 'vue'
import * as types from './mutations-types'

export default {

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
