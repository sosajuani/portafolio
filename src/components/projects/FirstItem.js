import React, {useState} from 'react'

import {ImagenProjectsDiv,ImageClick,LinksPortfolio} from './Projects.element'
import { FaLink,FaGithub } from "react-icons/fa";


const FirstItem = (props) => {
    const [click, setClick] = useState(false);
    const changeClick = ()=>{
      setClick(!click) 
    }
    
    return (
        <React.Fragment>
            <ImagenProjectsDiv onClick={ ()=> {changeClick()}}  src={props.img} alt="Imagen de proyecto"/>
            <ImageClick click={click}  onClick={ ()=> changeClick()}>
                <p>{props.title}</p>
                <p>
                    {props.children}
                </p>
                <LinksPortfolio>
                    <a className='linkMenu' href={props.github} rel='noreferrer' target="_blank"><FaGithub/></a>
                    <a className='linkMenu' href={props.web} rel='noreferrer' target="_blank"><FaLink/></a>
                </LinksPortfolio>
            </ImageClick>
        </React.Fragment>
    )
}

export default FirstItem