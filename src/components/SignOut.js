import { getAuth, signOut } from "firebase/auth";
import {Button} from "@mui/material";

export default function SignOut() {
    const auth = getAuth();
    return (
        <div>
            <Button variant="contained" className={'login-page_button'} onClick={() => signOut(auth)}>Sign Out</Button>
        </div>
    )
}
