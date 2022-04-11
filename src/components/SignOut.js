import {getAuth, signOut} from 'firebase/auth';
import {Button} from '@mui/material';
import './signout.scss';

export default function SignOut() {
    const auth = getAuth();
    return (
        <div className="login-page_button">
            <Button
                variant="contained"
                onClick={() => signOut(auth)}
            >Sign Out
            </Button>
        </div>
    );
}
