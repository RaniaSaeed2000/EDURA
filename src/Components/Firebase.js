import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7BAA5fMlaFculW3Md_ECpD0rFkiG8fXE",
  authDomain: "edura-eef87.firebaseapp.com",
  projectId: "edura-eef87",
  storageBucket: "edura-eef87.appspot.com",
  messagingSenderId: "766125363864",
  appId: "1:766125363864:web:7ba7b02fb35c2522a836ed"
};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const auth =firebase.auth();


