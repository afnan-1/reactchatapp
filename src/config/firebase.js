// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBevQeyq2D2kNMrcq3SSPF03wWEcy38WmQ",
    authDomain: "chat-app-b583d.firebaseapp.com",
    databaseURL: "https://chat-app-b583d.firebaseio.com",
    projectId: "chat-app-b583d",
    storageBucket: "chat-app-b583d.appspot.com",
    messagingSenderId: "449844567015",
    appId: "1:449844567015:web:db70fa17433188a965bb42",
    measurementId: "G-0EJD908EB3"
  };
firebase.initializeApp(firebaseConfig)
export default firebase