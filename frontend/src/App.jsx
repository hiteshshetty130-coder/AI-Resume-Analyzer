import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import UploadNavBar from './components/UploadNavBar';
import RegisterPage from './pages/RegisterPage';
import Upload from './pages/Upload';
import ProtectedRoutes from './components/ProtectedRoutes';
function App() {
  
  return (
    <>
     <UploadNavBar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/upload' element={
          <ProtectedRoutes>
          <Upload/>
          </ProtectedRoutes>
          }></Route>
      </Routes>
    </>
  )
}

export default App
