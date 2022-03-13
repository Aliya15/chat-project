import './App.css';
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ChatEngine} from "react-chat-engine";


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/main' element={<ChatEngine
                height='100vh'
                projectID='f975b43d-706d-46d0-b73a-b7c11e1f3111'
                userName='janeostin'
                userSecret='123'
            />}
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
