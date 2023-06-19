import { useState  } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
