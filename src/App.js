import './App.scss';
import Login from './components/Authorization/Login';
import ChatRoom from './components/ChatRoom/ChatRoom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Spin from './components/Common/Spin';
import RequireAuth from './RequireAuth';

function App() {
    return (
        <div className="App">
            <Spin/>
                <Router>
                    <Routes>
                         <Route path="/" element={<Login />} />
                         <Route
                         path="/chat"
                         element={
                            <RequireAuth>
                             <ChatRoom />
                            </RequireAuth>
                                }
                            />
                    </Routes>
                </Router>
        </div>
    );
}
//
// function RequireAuth() {
//     let auth = useAuth();
//     let location = useLocation();
//
//     if (!auth.user) {
//         // Redirect them to the /login page, but save the current location they were
//         // trying to go to when they were redirected. This allows us to send them
//         // along to that page after they login, which is a nicer user experience
//         // than dropping them off on the home page.
//         return <Navigate to="/login" state={{ from: location }} replace />;
//     }
//
//     return children;
// }

export default App;
