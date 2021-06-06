import { db, auth } from './firebase'

import store from '../store/index'

const proudsRef = db.collection('prouds');
const educationsRef = db.collection('/educations');
const skillsRef = db.collection('/skills');

export default {

    login({ email, password }){
        return auth.signInWithEmailAndPassword(email, password);
    },

    logout(){
        return auth.signOut();
    },

    getListAllProuds(){
        const userEmail = store.state.user.data.email;
        const list = proudsRef.where("userEmail", "==", userEmail).get()

        return list;
    },
    postProud( title, description, icon ){
        const userEmail = store.state.user.data.email;
        const proud = { title, description, icon, userEmail};

        return proudsRef.add(proud);
    },
    remProud( proudId ){
        const res = proudsRef.doc(proudId).delete();
        return res;
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
                ...proud
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
*/