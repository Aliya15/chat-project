import {MESSAGES_LOAD, MESSAGES_SEND} from './types';

const initialState = {
    messages: []
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MESSAGES_LOAD:
            const messageNew = action.data.map((res, index) => {
                return {
                    text: res.text,
                    id: index,
                    createdAt: {...res.createdAt},
                    photoURL: res.photoURL,
                    uid: res.uid,
                    author: res.author
                };
            });
            return {
                ...state,
                messages: messageNew
            };
        case MESSAGES_SEND:
            const message = {
                text: action.data.text,
                id: action.data.id,
                createdAt: {...action.data.createdAt},
                photoURL: action.data.photoURL,
                uid: action.data.uid,
                author: action.data.author
            };
            return {
                ...state,
                newMessages: message
            };
        default:
            return state;
    }
};
