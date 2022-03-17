import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyBaH8CONTTC-bsT4DBsch3gsAYJ-Gyze6E",
    authDomain: "chatapp-6b4f9.firebaseapp.com",
    databaseURL: "https://chatapp-6b4f9-default-rtdb.firebaseio.com",
    projectId: "chatapp-6b4f9",
    storageBucket: "chatapp-6b4f9.appspot.com",
    messagingSenderId: "465628674265",
    appId: "1:465628674265:web:ab410d2053c36939c366c8"}

const app = initializeApp(config);

const db = getFirestore(app);

const auth = getAuth(app);



export { db, auth };
