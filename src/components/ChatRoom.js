import React, {useState, useEffect} from 'react';
import SignOut from "./SignOut";
import { useSelector, useDispatch } from 'react-redux';
import {inputText, messagesLoad, sendMessage} from '../redux/actions'
import {Button, Input} from "@mui/material";

function ChatRoom() {
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch();
    const allMessages = useSelector(state => {
        const { messagesReducer } = state;
        return messagesReducer.messages;
    })

    const sendNewMessage = (e) => {
        e.preventDefault();
        dispatch(sendMessage(newMessage))
        setNewMessage('');
    }

    const handleChange = () => {
        dispatch(inputText(newMessage))
        setMessages(allMessages);
    }

    useEffect(() => {
        setMessages(allMessages);
    }, [newMessage, allMessages])

    useEffect(() => {
        dispatch(messagesLoad());
        setMessages(allMessages);
    }, []);

    return (
        <>
            <SignOut />
            <div className={'chatroom'}>
                {messages.map(({text}, index) => {
                    return (<div key={index}>
                                <p>{text}</p>
                            </div>)
                })}
                <div>
                    <form onSubmit={sendNewMessage}>
                        <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder={'Messages...'}/>
                        <Button type='submit' onClick={handleChange}>Send</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChatRoom;

