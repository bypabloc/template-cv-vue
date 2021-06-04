import * as types from './mutations-types'
import API from '@/api'

export default {

    fetchProuds({commit}, {user}){
        commit(types.FETCH_PROUDS_REQUEST)

        API.getListAllProuds(user)
            .then(snap => commit(types.FETCH_PROUDS_SUCCESS, { prouds: snap.val() }))
            .catch(error => commit(types.FETCH_PROUDS_FAILURE, { error }) )
    },
    
    fetchEducations({commit}, {user}){
        commit(types.FETCH_EDUCATIONS_REQUEST)

        API.getListAllEducations(user)
            .then(snap => commit(types.FETCH_EDUCATIONS_SUCCESS, { educations: snap.val() }))
            .catch(error => commit(types.FETCH_EDUCATIONS_FAILURE, { error }) )
    },
    
    fetchSkills({commit}, {user}){
        commit(types.FETCH_SKILLS_REQUEST)

        API.getListAllSkills(user)
            .then(snap => commit(types.FETCH_SKILLS_SUCCESS, { skills: snap.val() }))
            .catch(error => commit(types.FETCH_SKILLS_FAILURE, { error }) )
    },

    addProud({commit}, {title, description, icon, user}){
        API.postProud(title, description, icon, user)
            .then(proud => commit(types.ADD_PROUD, { proud } ) )
    },
    addEducation({commit}, {title, description, start, end, finished, user}){
        API.postEducation(title, description, start, end, finished, user)
            .then(education => commit(types.ADD_EDUCATION, { education } ) )
    },
    postSkill({commit}, { text, percentage, icon, user }){
        API.postSkill( text, percentage, icon, user )
            .then(skill => commit(types.ADD_SKILL, { skill } ) )
    },

    deleteProud({commit},{proudId}){
        API.deleteProud(proudId)
            .then( () => commit(types.DELETE_PROUD), {proudId} )
    }
}