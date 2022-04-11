import {INPUT_TEXT, MESSAGES_LOAD, MESSAGES_SEND} from './types';
import {addDoc, collection, getDocs, getFirestore, serverTimestamp} from 'firebase/firestore';
import {auth} from '../firebaseConfig';

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    };
}

export function messagesLoad() {
    return async dispatch => {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'messages'));
        const docsData = [];
        querySnapshot.forEach(doc => docsData.push(doc.data()));
        docsData.sort((a, b) => a.id - b.id);
        dispatch({
            type: MESSAGES_LOAD,
            data: docsData
        });
    };
}

export function sendMessage(newMessage) {
    return async dispatch => {
        const db = getFirestore();
        const {uid, photoURL} = auth.currentUser;
        const querySnapshot = await getDocs(collection(db, 'messages'));
        const docsData = [];
        querySnapshot.forEach(doc => docsData.push(doc.data()));
        const messageToBeSent = {
            text: newMessage,
            id: docsData.length,
            photoURL,
            uid,
            createdAt: serverTimestamp()
        };
        await addDoc(collection(db, 'messages'), messageToBeSent);
        dispatch(messagesLoad());
        dispatch({
            type: MESSAGES_SEND,
            data: messageToBeSent
        });
    };
}



