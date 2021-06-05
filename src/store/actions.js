import * as types from './mutations-types'
import API from '@/api'

export default {

    fetchProuds({commit}){
        commit(types.FETCH_PROUDS_REQUEST)

        API.getListAllProuds()
            .then(snap => { 
                const prouds = [];
                snap.forEach(data => {
                    prouds.push({
                        id: data.id,
                        ...data.data(),
                    });
                });
                commit(types.FETCH_PROUDS_SUCCESS, { prouds: prouds })
            })
            .catch(error => {
                    console.log('error',error)
                    commit(types.FETCH_PROUDS_FAILURE, { error }) 
                }
            )
    },
    
    fetchEducations({commit}){
        commit(types.FETCH_EDUCATIONS_REQUEST)

        API.getListAllEducations()
            .then(snap => commit(types.FETCH_EDUCATIONS_SUCCESS, { educations: snap.val() }))
            .catch(error => commit(types.FETCH_EDUCATIONS_FAILURE, { error }) )
    },
    
    fetchSkills({commit}){
        commit(types.FETCH_SKILLS_REQUEST)

        API.getListAllSkills()
            .then(snap => commit(types.FETCH_SKILLS_SUCCESS, { skills: snap.val() }))
            .catch(error => commit(types.FETCH_SKILLS_FAILURE, { error }) )
    },

    addProud({commit}, {title, description, icon }){
        console.log('action',{ title, description, icon });
        API.postProud(title, description, icon )
            .then(proud => {
                commit(types.ADD_PROUD, {
                    id: proud.id,
                    title, description, icon
                } )
            } )
    },
    editingProud({commit}, {id, status}){
        console.log('actions')
        console.log('id', id )
        console.log('status', status )
        commit(types.EDITING_PROUD, {id, status} )
    },
    remProud({commit}, id ){
        API.remProud(id)
            .then(proud => {
                console.log('.then(proud =>',proud)
                commit(types.REM_PROUD, id )
            } )
            .catch(err => {
                console.log(err)
            } )
    },

    addEducation({commit}, {title, description, start, end, finished }){
        API.postEducation(title, description, start, end, finished )
            .then(education => commit(types.ADD_EDUCATION, { education } ) )
    },
    postSkill({commit}, { text, percentage, icon }){
        API.postSkill( text, percentage, icon )
            .then(skill => commit(types.ADD_SKILL, { skill } ) )
    },

    deleteProud({commit},{proudId}){
        API.deleteProud(proudId)
            .then( () => commit(types.DELETE_PROUD), {proudId} )
    }
}