import React from 'react'
import {SectionProjects,TitleProjects,ProjectsContItems} from './Projects.element'
import ProjectsItemComponent from './ProjectsItemComponent'


export const Projects = () => {
  return (
    <SectionProjects className='sectionBase'>
        <TitleProjects className='titleHome animate__animated animate__bounceIn'>Proyectos <div className="handAnimation animate__animated animate__tada animate__delay-2s">👋</div></TitleProjects>
        <ProjectsContItems>
            <ProjectsItemComponent/>
        </ProjectsContItems>
    </SectionProjects>
  )
}

export default Projects

