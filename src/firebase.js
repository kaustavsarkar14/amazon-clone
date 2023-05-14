import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyAqILSucbO6y_k9uhSChjyslpjBncOTyOY",
  authDomain: "fir-29564.firebaseapp.com",
  projectId: "fir-29564",
  storageBucket: "fir-29564.appspot.com",
  messagingSenderId: "41084819806",
  appId: "1:41084819806:web:6d7fac1e0da304f7cfd7cf",
  measurementId: "G-M0HZBWRB57"
})


const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}