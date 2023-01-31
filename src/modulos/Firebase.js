import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAevF0u3A30_8QzdUZTUbZXYL7gp9SaBF4",
    authDomain: "prueba-d55f4.firebaseapp.com",
    databaseURL: "https://prueba-d55f4-default-rtdb.firebaseio.com",
    projectId: "prueba-d55f4",
    storageBucket: "prueba-d55f4.appspot.com",
    messagingSenderId: "196168468760",
    appId: "1:196168468760:web:7d913502dfd76d0d58b66d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db