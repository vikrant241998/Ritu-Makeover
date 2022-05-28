import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
                      


var firebaseapp = firebase.initializeApp({

    apiKey: "AIzaSyBrNm66hUnfsOFVpcG473bsTFndnebooew",
    authDomain: "react-contact-form-c552a.firebaseapp.com",
    databaseURL: "https://react-contact-7fb8e.firebaseio.com",
    projectId: "react-contact-form-c552a",
    storageBucket: "react-contact-form-c552a.appspot.com",
    messagingSenderId: "375164256989",
    appId: "1:375164256989:web:90b89f4c86c0d0e98c9134"
});

let db = firebaseapp.firestore();
 export { db };
 