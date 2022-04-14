import {getAuth, signOut} from 'firebase/auth';
import {Button} from '@mui/material';
import {
    useNavigate
} from "react-router-dom";
import './SignOut.scss';

export default function SignOut() {
    const auth = getAuth();
    const navigate = useNavigate();
    return (
        <div className="login-page_button">
            <Button
                variant="contained"
                onClick={() => signOut(auth).then(() => navigate("../", { replace: true }))}
            >Sign Out
            </Button>
        </div>
    );
}
