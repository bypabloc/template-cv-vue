import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import settings from './settings'

export const timestamp = firebase.firestore.Timestamp

const firebaseApp = firebase.initializeApp(settings)

export const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()

export default firebaseApp
