
import './App.css'
import { Navigate, Route, Routes } from 'react-router'
import Home from './component/Home'
import Login from './pages/Login'
import Upload from './pages/Upload'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        
        <Route path='/' element={<Home />}>
          <Route path='' element={<Navigate to={'/login'} />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </>
  )
}

export default App
