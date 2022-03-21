import React, {useState} from 'react';
import {Button, Input} from '@mui/material';
import {addDoc, collection, getFirestore, serverTimestamp} from 'firebase/firestore'
import {auth} from '../firebaseConfig';

export default function SendMessage() {
    const [message, setMessage] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault()
        const db = getFirestore();
        const {uid,photoURL} = auth.currentUser;

        await addDoc(collection(db, 'messages'), {
            text: message,
            photoURL,
            uid,
            createdAt: serverTimestamp()})
        setMessage('');
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <Input value={message} onChange={e => setMessage(e.target.value)} placeholder={'Messages...'}/>
                <Button type='submit'>Send</Button>
            </form>
        </div>
    )
}
