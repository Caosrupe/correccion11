import firebase from 'firebase/app'
import 'firebase/firestore'

const app=firebase.initializeApp({

    apiKey: "AIzaSyB0kZ7UUnNM8luLmItOQVAUtKyfL2VEHDE",
  
    authDomain: "carlosruiz11.firebaseapp.com",
  
    projectId: "carlosruiz11",
  
    storageBucket: "carlosruiz11.appspot.com",
  
    messagingSenderId: "264756414970",
  
    appId: "1:264756414970:web:6bbb66b7ecb9f44f773c43"
  
});
export function getFirebase(){
return app;

}

export function getFirestore(){
return firebase.firestore(app)
}
