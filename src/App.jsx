import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavebarComp from './components/NavebarComp'
import SkillComp from './components/SkillComp'
import ProjectComp from './components/ProjectComp'
import ContactComp from './components/ContactComp'
import FooterComp from './components/FooterComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavebarComp />
      <SkillComp/>
      <ProjectComp/>
      <ContactComp/>
      <FooterComp/>
    </>
  )
}

export default App
