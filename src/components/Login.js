import React from 'react';
import {Button} from "@mui/material";
import { auth } from '../firebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
    const handleClick = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            }).catch(() => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // const email = error.email;
            // const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    return (
        <div className={'login-page'}>
            <div className={'login-page_item'}>
                <h2>Welcome!</h2>
                <Button variant="contained" className={'login-page_button'} onClick={handleClick}>Login with Google</Button>
            </div>
        </div>
    )
}

export default Login;
