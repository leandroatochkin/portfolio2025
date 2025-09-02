import React from 'react'
import { useMobile } from '../../../hooks/hooks'
import { projects } from '../../../data/projects'
import ProjectCard from '../../cards/ProjectCard'


const Projects = () => {
const isMobile = useMobile()    
  return (
    <div
    style={{
        background: 'transparent',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: isMobile ? 'scroll' : 'hidden',
    }}
    >
        {
            projects && projects.map((project, index)=>(
                <ProjectCard 
                key={index}
                title={project.title}
                pictures={project.pictures}
                description={project.description}
                stack={project.stack}
                />
            ))
        }
    </div>
  )
}

export default Projects