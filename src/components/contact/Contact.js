import React from 'react'
import {SectionContact,ContacTitle} from './Contact.element'
//import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <SectionContact className='sectionBase'>
        <ContacTitle className='titleHome animate__animated animate__rubberBand animate__delay-1s'>
          <a className='linkMenu' href='mailto:contacto@juansosa.com.ar'>contacto@juansosa.com.ar</a>
        </ContacTitle>
    </SectionContact>
  )
}

export default Contact