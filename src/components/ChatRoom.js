import React, {useState, useEffect} from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function ChatRoom() {
    const [messages, setMessages] = useState([]);
    useEffect(async() => {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "messages"));
        const docsData = [];
        querySnapshot.forEach(doc => docsData.push(doc.data()));
        setMessages(docsData);
    }, []);
    return (
        <div className={'chatroom'}>
            {messages.map(({id, text}) => {
                return (<div key={id}>
                            <p>{text}</p>
                        </div>)
            })}
        </div>
    )
}

