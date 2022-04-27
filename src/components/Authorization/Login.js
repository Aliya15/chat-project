import React, {useState} from 'react';
import {auth} from '../../firebaseConfig';
import {Button, Input} from '@mui/material';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import {
    GoogleAuthProvider,
    signInWithPopup,
    setPersistence,
    browserSessionPersistence,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {
    useNavigate
} from "react-router-dom";
import './Login.scss'

function Login() {
    const navigate = useNavigate();
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [isError, setIsError] = useState(false);
    const [open, setOpen] = useState(false);

    const validateEmail = (value) => {
        const isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        setEmailValid(isEmailValid);
    }

    const handleClose = (event, reason) => {
        setOpen(false);
    };

    const validatePassword = (value) => {
        const isPasswordValid = value.length >= 6;
        setPasswordValid(isPasswordValid);
    }

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await setPersistence(auth, browserSessionPersistence);
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);
            if (user) {
                navigate("../chat", { replace: true });
            }
            setOpen(true);
            setIsError(false);
        } catch(e) {
            console.error(e);
            setIsError(true);
            setOpen(true);
        }
    };

    const loginWithEmail = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                    auth,
                    signInEmail,
                    signInPassword
            );
            if (user) {
                navigate("../chat", { replace: true });
            }
            setOpen(true);
            setIsError(false);
        } catch (e) {
            console.error(e);
            setIsError(true);
            setOpen(true);
        }
    };

    const createAnAccount = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                signInEmail,
                signInPassword
            );
            setOpen(true);
            setIsError(false);
        } catch (e) {
            console.error(e);
            setIsError(true);
            setOpen(true);
        }
    };

    return (
        <div className={'login-page'}>
            <form className={'login-page_item'}>
                <h2>Welcome!</h2>
                <div>
                    <Input placeholder={'Email...'} error={!emailValid} type='email' onChange={(e) => {
                        validateEmail(e.target.value);
                        setSignInEmail(e.target.value);
                    }} />
                    <Input placeholder={'Password...'} error={!passwordValid} type='password' onChange={(e) => {
                        validatePassword(e.target.value);
                        setSignInPassword(e.target.value);
                    }} />
                    <Button variant="contained" id={'login-page_button loginWithEmail'} onClick={loginWithEmail}>Login with
                        Email</Button>
                </div>
                <div className={'login-page_variants'}>
                    <Button variant="contained" id={'login-page_button createAccount'} onClick={createAnAccount}>Create A User Account </Button>
                    <Button variant="contained" id={'login-page_button loginWithGoogle'} onClick={loginWithGoogle}>Login with
                        Google</Button>
                </div>
                </form>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={isError ? 'Error' :'Successful'}
                />
            </Stack>
        </div>
    );
}

export default Login;
