import Firebase from '../../config/firebase'
import firebase from 'firebase'

const setData = data =>{
    return (dispatch)=>{
        dispatch({
            type:"SETDATA",
            data:data,
        })
    }
}

const facebook_login=()=>{
    return (dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        Firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-i
            var user = result.user;
            console.log('user',user);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            console.log(errorMessage);
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }
}
export {
    setData,
    facebook_login
}