import { db, auth, storage, timestamp } from './firebase'
import store from '../store/index'

// const now = timestamp.now()
const now = timestamp.now()
// time: Firestore.FieldValue.serverTimestamp()

const storageProfile = storage.ref().child('profile_img/');

const configRef = db.collection('config');
const proudsRef = db.collection('prouds');
const educationsRef = db.collection('educations');
const skillsRef = db.collection('skills');

export default {

    login({ email, password }){
        return auth.signInWithEmailAndPassword(email, password);
    },
    loginWithGoogle({ displayName, email }){
        return new Promise( (resolver, rechazar ) => {

            const config = { 
                img: null, 
                email,
                displayName,
                nickname: email,
                createdAt: now,
                updatedAt: now,
            };
            configRef.where("email", "==", email).get()
                .then( data => {
                    if(data.empty){
                        configRef.add(config)
                            .then( () => {
                                resolver( config );
                            } )
                            .catch(err => {
                                rechazar( err );
                            } );
                    }else{
                        const info = [];
                        data.forEach(data => {
                            info.push({
                                id: data.id,
                                ...data.data(),
                            });
                        });
                        resolver( config );
                    }
                } )
                .catch(err => {
                    console.log('err',err)
                    rechazar( err );
                } );

        })
    },
    register({ email, password }){
        return auth.createUserWithEmailAndPassword(email, password);
    },

    logout(){
        return auth.signOut();
    },

    // var faker = require('faker');

    getConfig(){
        const nickname = store.state.user.data.nickname;
        console.log('getConfig');
        console.log('nickname',nickname);
        return configRef.where("nickname", "==", nickname).get();
    },
    createConfig( userEmail ){
        const config = { 

            img: null, 

            userEmail,
            // nickname,
            createdAt: now,
            updatedAt: now,
        };
        return configRef.add(config);
    },
    saveConfig( data ){
        return configRef.doc(store.state.data.config.data.id).update({ 
            ...data,
            updatedAt: now,
        });
    },
    saveImg( { img } ){
        const userEmail = store.state.user.data.email;
        return new Promise( (resolver, rechazar ) => {
            const spaceRef = storageProfile.child(`/${userEmail}.png`);
            spaceRef.putString(img, 'data_url')
                .then( () => {
                    spaceRef.getDownloadURL()
                        .then( (res) => {
                            resolver({ img:res });
                        } )
                        .catch(err => {
                            rechazar(err.message);
                        } )
                } )
                .catch(err => {
                    rechazar(err);
                } )
        })
    },

    getListAllProuds(){
        const userEmail = store.state.user.data.email;
        const list = proudsRef.where("userEmail", "==", userEmail).orderBy("idx", "asc").get()

        return list;
    },
    postProud( { title, description, icon, idx } ){
        const userEmail = store.state.user.data.email;
        const proud = { 
            title, 
            description, 
            icon, 
            userEmail,
            idx,
            createdAt: now,
            updatedAt: now,
        };

        return proudsRef.add(proud);
    },
    saveProud( { id, title, description, icon, idx } ){
        const res = proudsRef.doc(id).update({ 
            title, description, icon,
            idx,
            updatedAt: now,
        });
        return res;
    },
    updateProud ( prouds ){
        return new Promise( (resolver, rechazar ) => {
            for (const i in prouds) {
                const e = prouds[i];
                const doc = proudsRef.doc(e.id);
                doc.update({ 
                    idx: e.idx,
                })
                .then( () => {
                    if(i>=(prouds.length-1)){
                        resolver();
                    }
                } )
                .catch(() => {
                    rechazar();
                } )
            }
        })
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