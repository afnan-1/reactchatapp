import { useHistory } from 'react-router-dom'
import firebase from '../../config/firebase'
// import firebase from 'firebase'

const setData = data =>{
    return (dispatch)=>{
        dispatch({
            type:"SETDATA",
            data:data,
        })
    }
}

const facebook_login=(history)=>{
    return (dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-i
            var user = result.user;
            let create_user = {
                name:user.displayName,
                email:user.email,
                profile:user.photoURL,
                uid:user.uid
            }
            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
            .then(()=>{
                dispatch({type:'SETUSER', data:create_user})
                alert('user login succesfully')
                history.push('/chat')
            })
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

const get_users=()=>{
    return (dispatch)=>{
        let users=[]
        firebase.database().ref('/').child('users').on('child_added',(data)=>{
            users.push(data.val())
            console.log(users);
            
        })
        dispatch({type:'SETFIREBASEUSERS',data:users})
    }
}
export {
    setData,
    facebook_login,
    get_users
}