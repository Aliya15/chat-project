import './App.scss';
import Login from './components/Login'
import ChatRoom from './components/ChatRoom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from "../src/firebaseConfig";
import { useAuthState } from 'react-firebase-hooks/auth';
import Spin from './Spin';

function App() {
    const [user] = useAuthState(auth);
  return (
    <div className='App'>
        <Spin />
      <Router>
        <Routes>
            <Route path='/' element={user ? <ChatRoom /> : <Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
