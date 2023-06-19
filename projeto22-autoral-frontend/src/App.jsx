import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/App.css'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login'

import { UserProvider } from './contexts/UserContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
