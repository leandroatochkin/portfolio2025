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
            position: 'relative',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: `repeat(${isMobile ? '1' : '3'}, 1fr)`,
            gridTemplateRows: `repeat(${isMobile ? '5' : '2'}, 1fr)`,
            rowGap: '20px',
            marginTop: '4rem',
            paddingBottom: '4rem',
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
                demo={project?.demo}
                repo={project?.repo}
                />
            ))
        }
    </div>
  )
}

export default Projects