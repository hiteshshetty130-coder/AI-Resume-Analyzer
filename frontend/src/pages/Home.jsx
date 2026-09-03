import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import LandingFooter from '../components/LandingFooter'
import { useNavigate } from 'react-router-dom'

//Home page all component Rendering
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <LandingFooter/>
    </>
  )
}

export default Home
