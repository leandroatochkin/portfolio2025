import { useParams } from 'react-router-dom'
import Skills from './category/Skills';
import Projects from './category/Projects';



type Section = 'skills' | 'certificates' | 'projects' | 'resume' | 'contact' | 'stories' | undefined

const PublicationViewer = () => {
const { section } = useParams<{ section: Section }>();

const publicationMapper = (section: Section) => {
    switch (section) {
        case 'skills':
            return <Skills />;
        case 'projects':
            return <Projects />
        // Add cases for other categories like 'blogs', 'articles', etc.
        default:
            return <div>Category not found</div>;
    }
}

  return (
    <>
    {
        publicationMapper(section)
    }
    </>
  )
}

export default PublicationViewer