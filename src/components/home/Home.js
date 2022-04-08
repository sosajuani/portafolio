import React from 'react'
import { HomeSection,DivIcons } from './Home.element'
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <HomeSection className='sectionBase'>
        <h1 className='titleHome animate__animated animate__jello'>Juan Sosa</h1>
        <h2 className='subtitleHome'>Desarrollador web</h2>
        <DivIcons>
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/juanigsosa/'><FaLinkedin className='iconHome'/></a>
        <a target="_blank" rel="noreferrer" href='https://github.com/sosajuani/'><FaGithub className='iconHome'/></a>
        <a target="_blank" rel="noreferrer" href='mailto:contacto@juansosa.com.ar'><FaEnvelope className='iconHome'/></a>
        </DivIcons>
    </HomeSection>
  )
}

export default Home