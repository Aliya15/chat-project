import React from 'react';
import {Button} from '@mui/material';
import {auth} from '../../firebaseConfig';
import {GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence} from 'firebase/auth';
import {
    useNavigate
} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const handleClick = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await setPersistence(auth, browserSessionPersistence);
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            if (user) {
                navigate("../chat", { replace: true });
            }
        } catch(e) {
            console.error(e)
        }
    };

    return (
        <div className={'login-page'}>
            <div className={'login-page_item'}>
                <h2>Welcome!</h2>
                <Button variant="contained" className={'login-page_button'} onClick={handleClick}>Login with
                    Google</Button>
            </div>
        </div>
    );
}

export default Login;
