import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import LandingFooter from '../components/LandingFooter'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate();
  const handlenav=()=>{
    const user=localStorage.getItem("userEmail");
    if (user){
      navigate("/upload");
    }
    else{
      navigate("/login")
    }
  };

  return (
    <>
      <Navbar handlenav={handlenav}/>
      <Hero handlenav={handlenav}/>
      <Features/>
      <LandingFooter/>
    </>
  )
}

export default Home
