import React from 'react'
import {ItemProjectDiv} from './Projects.element'
import FirstItem from './FirstItem'
import ImagePortfolio from '../../asset/img/portfolio.webp'
import ImageOdet from '../../asset/img/odet.webp'
import ImageGugu from '../../asset/img/gugu.webp'
import { DiReact, DiHtml5,DiCss3, DiJavascript1,DiNodejsSmall,DiMysql,DiTrello } from "react-icons/di";
const ProjectsItemComponent = () => {
     return (
          <React.Fragment>
          <ItemProjectDiv>      
               <FirstItem title="PORTAFOLIO" img={ImagePortfolio} github="https://github.com/sosajuani/portafolio" web="https://juansosa.com.ar">
                    <DiReact/>
                    <DiHtml5/>
                    <DiCss3/>
                    <DiJavascript1/>
               </FirstItem>
          </ItemProjectDiv>
          <ItemProjectDiv>      
               <FirstItem title="ODET" img={ImageOdet} github="https://github.com/sosajuani/odet" web="https://odet.herokuapp.com/">
                    <DiReact/>
                    <DiHtml5/>
                    <DiCss3/>
                    <DiJavascript1/>
                    <DiMysql/>
               </FirstItem>
          </ItemProjectDiv>
          <ItemProjectDiv>      
               <FirstItem title="Tienda Gugu" img={ImageGugu} github="https://github.com/JesusNeyr/Grupo6-Sprint8" web="https://tiendagugu.herokuapp.com/">
                    <DiReact/>
                    <DiHtml5/>
                    <DiCss3/>
                    <DiJavascript1/>
                    <DiNodejsSmall/>
                    <DiMysql/>
                    <DiTrello/>
               </FirstItem>
          </ItemProjectDiv>
          </React.Fragment>
     )
}

export default ProjectsItemComponent