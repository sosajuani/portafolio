import React, { useState } from 'react'
import {SectionAbout,TitleAbout,ContAbout,TechnologiesCont,SubtitleAbout,IconsContAbout,Tooltip,IconItem} from './About.element'
import { DiCss3,DiHtml5,DiJavascript,DiGithubBadge,DiMysql,DiNodejsSmall,DiPhp,DiTrello,DiVisualstudio,DiPhotoshop } from "react-icons/di";

const About = () => {
  const [tooltip,setTooltip] = useState(false);
  const [icoTooltip,seticoTooltip] = useState([])
  const iconSelect = (icon)=>{
    seticoTooltip(icon)
    setTooltip(!tooltip)
  }
  return (
      <SectionAbout className='sectionBase'>
          <TitleAbout className='titleHome animate__animated animate__bounceIn'>
            Hola! <div className='handAnimation animate__animated animate__bounce animate__repeat-3'>👦</div>
          </TitleAbout>
          <ContAbout>
                Soy Juan y actualmente vivo en Buenos aires, Argentina.
          </ContAbout>
          <ContAbout>
                Desde muy chico me sentí atraído por la programación, me daba curiosidad entender como funcionaba una página web, 
          </ContAbout>
          <ContAbout>
                por ese motivo me puse a investigar y rápidamente se convirtió en un hobby.
          </ContAbout>
          <TechnologiesCont>
            <SubtitleAbout>
              Tecnologías
            </SubtitleAbout>
            <IconsContAbout>

              <IconItem>
                <DiCss3 onClick={()=> iconSelect("icoCss")} className='iconAbout'/>
                <Tooltip tooltip={tooltip} className={tooltip === true && icoTooltip === "icoCss" ? "displayBlock" : "displayNone"} >
                  CSS
                </Tooltip>
              </IconItem>

              <IconItem>
                <DiHtml5 onClick={()=> iconSelect("icoHtml")} className='iconAbout animate__delay-3s'/>
                <Tooltip tooltip={tooltip} className={tooltip === true && icoTooltip === "icoHtml" ? "displayBlock" : "displayNone"}>
                  HTML
                </Tooltip>
              </IconItem>

              <IconItem>
                <DiJavascript onClick={()=> iconSelect("icoJs")} className='iconAbout animate__delay-4s'/>
                <Tooltip tooltip={tooltip} className={tooltip === true && icoTooltip === "icoJs" ? "displayBlock" : "displayNone"}>JavaScript</Tooltip>
              </IconItem>
              <IconItem>
                <DiGithubBadge onClick={()=> iconSelect("icoGithub")} className='iconAbout animate__delay-5s'/>
                <Tooltip tooltip={tooltip} className={tooltip === true && icoTooltip === "icoGithub" ? "displayBlock" : "displayNone"}>Github</Tooltip>
              </IconItem>
              <IconItem>
                <DiMysql onClick={()=> iconSelect("icoMysql")} className='iconAbout'/>
                <Tooltip tooltip={tooltip} className={tooltip === true && icoTooltip === "icoMysql" ? "displayBlock" : "displayNone"}>MySQL</Tooltip>
              </IconItem>
              <IconItem>
                <DiNodejsSmall onClick={()=> iconSelect("icoNode")} className='iconAbout'/>
                <Tooltip tooltip={tooltip} className={tooltip === true && icoTooltip === "icoNode" ? "displayBlock" : "displayNone"}>Node.js</Tooltip>
              </IconItem>
              <IconItem>
                <DiPhp onClick={()=> iconSelect("icoPhp")} className='iconAbout'/>
                <Tooltip tooltip={tooltip} className={tooltip === true && icoTooltip === "icoPhp" ? "displayBlock" : "displayNone"}>PHP</Tooltip>
              </IconItem>
              <IconItem>
                <DiTrello onClick={()=> iconSelect("icoTrello")} className='iconAbout'/>
                <Tooltip tooltip={tooltip} className={tooltip === true && icoTooltip === "icoTrello" ? "displayBlock" : "displayNone"}>Trello</Tooltip>
              </IconItem>
              <IconItem>
                <DiVisualstudio onClick={()=> iconSelect("icoVs")} className='iconAbout'/>
                <Tooltip tooltip={tooltip} className={tooltip === true && icoTooltip === "icoVs" ? "displayBlock" : "displayNone"}>VsCode</Tooltip>
              </IconItem>
              <IconItem>
                <DiPhotoshop onClick={()=> iconSelect("icoPs")} className='iconAbout'/>
                <Tooltip tooltip={tooltip} className={tooltip === true && icoTooltip === "icoPs" ? "displayBlock" : "displayNone"}>Photoshop</Tooltip>
              </IconItem>
            </IconsContAbout>
          </TechnologiesCont>
      </SectionAbout>
  )
}

export default About