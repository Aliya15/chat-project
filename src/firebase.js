import { initializeApp } from 'firebase/app';
import 'firebase/auth';

export const auth = initializeApp({
    apiKey: "AIzaSyBaH8CONTTC-bsT4DBsch3gsAYJ-Gyze6E",
    authDomain: "chatapp-6b4f9.firebaseapp.com",
    projectId: "chatapp-6b4f9",
    storageBucket: "chatapp-6b4f9.appspot.com",
    messagingSenderId: "465628674265",
    appId: "1:465628674265:web:ab410d2053c36939c366c8"
}).auth();
