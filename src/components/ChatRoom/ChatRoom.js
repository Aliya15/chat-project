import React, {useEffect, useRef, useState} from 'react';
import SignOut from '../Authorization/SignOut';
import TextBubble from './TextBubble'
import {useDispatch, useSelector} from 'react-redux';
import {inputText, messagesLoad, sendMessage} from '../../store/actions';
import {Button, Input} from '@mui/material';
import './ChatRoom.scss';

function ChatRoom() {
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch();
    const listOfAuthors = messages.map((item) => item.author);
    const authors = [...new Set(listOfAuthors)];
    const inputRef = useRef(null);
    const allMessages = useSelector(state => {
        const {messagesReducer} = state;
        return messagesReducer.messages;
    });

    const sendNewMessage = (e) => {
        e.preventDefault();
        dispatch(sendMessage(newMessage));
        setNewMessage('');
    };

    const handleChange = () => {
        dispatch(inputText(newMessage));
        setMessages(allMessages);
    };

    useEffect(() => {
        setMessages(allMessages);
        inputRef.current.focus();
    }, [newMessage, allMessages]);

    useEffect(() => {
        dispatch(messagesLoad());
        setMessages(allMessages);
    }, []);

    return (
        <>
            <SignOut/>
            <div className="chatroom">
                <div className="chatroom_contacts">
                    <h2>Contacts</h2>
                    <div className='chatroom_contacts_list'>{authors.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })}</div>
                </div>
                <div className="chatroom_chat">
                    <h2>Chat Room</h2>
                    <div>
                        {messages.map((item, index) => {
                            return (<TextBubble props={item} key={index} />);
                        })}
                    </div>
                    <div className="chatroom_form">
                        <form onSubmit={sendNewMessage}>
                            <Input ref={inputRef} value={newMessage} onChange={(e) => setNewMessage(e.target.value)}
                                   placeholder={'Messages...'}/>
                            <Button type="submit" onClick={handleChange}>Send</Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatRoom;

