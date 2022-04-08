import React, { useState } from 'react'
import {NavbarCont,NavbarUl,NavbarLi,NavMobileMenu} from './Navbar.element'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(false);
  const changeClick = ()=>{
    setClick(!click)
  }
  return (
    <React.Fragment>
      <NavbarCont>
          <NavMobileMenu>
            {click ? null : <FaBars onClick={ ()=> changeClick()}/> }
          </NavMobileMenu>
      </NavbarCont>
          <NavbarUl className='menu' click={click}>
            <NavbarLi className={click ? 'animate__animated animate__lightSpeedInLeft' : null } onClick={ ()=> changeClick()}>
                  <Link className='linkMenu' to="/">Inicio</Link>
            </NavbarLi>

            <NavbarLi className={click ? 'animate__animated animate__lightSpeedInLeft' : null } onClick={ ()=> changeClick()}>
                <Link className='linkMenu' to="/projects">Proyectos</Link>
            </NavbarLi>

            <NavbarLi className={click ? 'animate__animated animate__lightSpeedInLeft' : null } onClick={ ()=> changeClick()}>
                  <Link className='linkMenu' to="/about">Sobre mi</Link>
            </NavbarLi>

            <NavbarLi className={click ? 'animate__animated animate__lightSpeedInLeft' : null } onClick={ ()=> changeClick()}>
                <Link className='linkMenu' to="/contact">Contacto</Link>
            </NavbarLi>

            <NavbarLi className={click ? 'animate__animated animate__lightSpeedInLeft' : null }>
                <FaTimes onClick={ ()=> changeClick()}/>
            </NavbarLi>
          </NavbarUl>
    </React.Fragment>
  )
}

export default Navbar