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

export default App;
