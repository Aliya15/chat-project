import { useLocation, Navigate } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth';
import { getAuth, onAuthStateChanged  } from "firebase/auth";

export default function RequireAuth({ children }: { children: JSX.Element }) {
        let location = useLocation();
        const auth = getAuth();
        if (!auth.currentUser) {
            return <Navigate to="/" state={{ from: location }} replace />;
        } else {
            return children;
        }
}
