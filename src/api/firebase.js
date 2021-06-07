import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import settings from './settings'

const firebaseApp = firebase.initializeApp(settings)

export const db = firebaseApp.firestore()
export const storage = firebaseApp.storage()
export const auth = firebaseApp.auth()

export const timestamp = firebase.firestore.Timestamp
export const runTransaction = db.runTransaction

export default firebaseApp
