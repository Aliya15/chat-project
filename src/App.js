import './App.css';
import Login from './components/Login'
import ChatRoom from './components/ChatRoom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/main' element={<ChatRoom/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
