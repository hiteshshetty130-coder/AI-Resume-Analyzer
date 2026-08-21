import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import UploadNavBar from './components/UploadNavBar';
import RegisterPage from './pages/RegisterPage';
import Upload from './pages/Upload';
import ProtectedRoutes from './components/ProtectedRoutes';
import Result from './pages/Result';
function App() {
  
  
  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/upload' element={
          <ProtectedRoutes>
          <Upload/>
          </ProtectedRoutes>
          }></Route>
          <Route path='/result' element={
            <ProtectedRoutes>
          <Result/>
          </ProtectedRoutes>
          }></Route>
      </Routes>
    </>
  )
}

export default App
