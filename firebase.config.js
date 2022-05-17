import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQbSfnzon2VtWnvSO5VS7osLBhhYrm0dg",
  authDomain: "microfrontendapp-94478.firebaseapp.com",
  projectId: "microfrontendapp-94478",
  storageBucket: "microfrontendapp-94478.appspot.com",
  messagingSenderId: "763040121136",
  appId: "1:763040121136:web:7d45ce99f8cacccdc488f5"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };