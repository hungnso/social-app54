import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import request from "./Api/request"
import CreatePost from './Pages/CreatePost/CreatePost';
import PostDetail from './Pages/PostDetail/PostDetail';
import AddFriends from './Pages/AddFriends/AddFriends';

export const AuthContext = React.createContext();

function App() {
  const [user, setUser] = React.useState(null);
  const [status, setStatus] = React.useState('idle');


  const fetchUserInfo = async () => {
    setStatus("loading")
    const token = localStorage.getItem('token');
    if (!token) {
      setStatus("done")
    }

    try {
      const res = await request({
        url: '/auth/user',
        method: 'GET',
      })

      if (res.data) {
        setUser(res.data)
        setStatus('done')
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.log(err)
      setStatus('error')
    }
  }

  React.useEffect(() => {
    fetchUserInfo()
  }, [])

  if (status === 'idle' || status === 'loading') return <div>Full page loading...</div>
  if (status === 'error') return <div>Error</div>


  return (
    <AuthContext.Provider value={{ user }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/posts/:postId' element={<PostDetail />} />
        <Route path='/friends' element={<AddFriends />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
