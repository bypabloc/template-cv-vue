import { db } from './firebase'
import store from '../store/index'

const proudsRef = db.ref('/prouds');
const educationsRef = db.ref('/educations');
const skillsRef = db.ref('/skills');

export default {

    getListAllProuds(){
        const userEmail = store.state.user.data.email;

        const query = proudsRef.orderByChild('userEmail').equalTo(userEmail);
        return query.once('value');
    },
    postProud( title, description, icon ){
        const userEmail = store.state.user.data.email;
        const id = proudsRef.push().key;
        const proud = { title, description, icon, userEmail};
        return proudsRef.child(id).set(proud).then(() => {
            return { 
                id,
                proud
            }
        });
    },
    remProud( proudId ){
        console.log('API',proudId);
        const res = proudsRef.child(proudId).remove();
        console.log('res',res);
        return proudId;
    },

    getListAllEducations(){
        const userEmail = store.state.user.data.email;

        const query = educationsRef.orderByChild('owner').equalTo(userEmail);
        return query.once('value');
    },
    postEducation( title, description, start, end, finished ){
        const userEmail = store.state.user.data.email;

        const id = educationsRef.push().key;
        const education = { title, description, start, end, finished, userEmail};

        return educationsRef.child(id).set(education).then(()=>education);
    },

    getListAllSkills(){
        const userEmail = store.state.user.data.email;

        const query = skillsRef.orderByChild('owner').equalTo(userEmail);
        return query.once('value');
    },
    postSkill( text, percentage, icon ){
        const userEmail = store.state.user.data.email;

        const id = skillsRef.push().key;
        const skill = { text, percentage, icon, userEmail};

        return skillsRef.child(id).set(skill).then(()=>skill);
    },
}

/*
    // skill
        icon: 'fab fa-js',
        text: 'JavaScript',
        percentage: 75,
*/

/*
    // education
        start: '2011',
        end: '2016',
        title: 'Informatics Engineer',
        description: 'IUTAB University. Learn the basics of technology.',
        finished: true,
*/

/*
    //  proud
        icon: 'fas fa-graduation-cap',
        title: 'Have graduated as an Informatics Engineer.',
        description: 'The pride of having exceeded one goal, of so many, of my life.',
*/