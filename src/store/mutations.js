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

    [types.ADD_PROUD] (state, {id, proud} ){
        state.prouds[id] = proud
    },
    [types.REM_PROUD] ( state, proud_id ){
        console.clear()

        state.prouds = Object.entries(state.prouds).reduce( ( old, curr ) => {
            if(proud_id!==curr[0]){
                old[curr[0]] = curr[1]
            }
            return old;
        },{})
    },

    [types.ADD_EDUCATION] (state, { education }){
        Vue.set(state.educations, education.id, education )
    },
    [types.ADD_SKILL] (state, { skill }){

        Vue.set(state.skills, skill.id, skill )
    },
    
}
