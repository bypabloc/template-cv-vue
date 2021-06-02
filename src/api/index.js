import { db } from './firebase'

const proudsRef = db.ref('/prouds');
const educationsRef = db.ref('/educations');
const skillsRef = db.ref('/skills');

export default {
    getListAllSkills(userId = 1){
        const query = skillsRef.orderByChild('owner').equalTo(userId);
        return query.once('value');
    },
    postSkill( text, percentage, icon, owner = 1){
        const id = skillsRef.push().key;
        const skill = { text, percentage, icon, owner};

        return skillsRef.child(id).set(skill).then(()=>skill);
    },

    getListAllProuds(userId = 1){
        const query = proudsRef.orderByChild('owner').equalTo(userId);
        return query.once('value');
    },
    postProud( title, description, icon, owner = 1){
        const id = proudsRef.push().key;
        const proud = { title, description, icon, owner};

        return proudsRef.child(id).set(proud).then(()=>proud);
    },

    getListAllEducations(userId = 1){
        const query = educationsRef.orderByChild('owner').equalTo(userId);
        return query.once('value');
    },
    postEducation( title, description, start, end, finished, owner = 1 ){
        const id = educationsRef.push().key;
        const education = { title, description, start, end, finished, owner};

        return educationsRef.child(id).set(education).then(()=>education);
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