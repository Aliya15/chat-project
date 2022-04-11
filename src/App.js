import './App.scss';
import Login from './components/Authorization/Login';
import ChatRoom from './components/ChatRoom/ChatRoom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {auth} from './firebaseConfig';
import {useAuthState} from 'react-firebase-hooks/auth';
import Spin from './components/Common/Spin';

function App() {
    const [user] = useAuthState(auth);
    return (
        <div className="App">
            <Spin/>
            <Router>
                <Routes>
                    <Route path="/" element={user ? <ChatRoom/> : <Login/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
