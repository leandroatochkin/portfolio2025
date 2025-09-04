import { useParams } from 'react-router-dom'
import Skills from './category/Skills';
import Projects from './category/Projects';
import Resume from './category/Resume';
import Contact from './category/Contact';
import Home from './category/Home';



type Section = 'skills' | 'home' | 'projects' | 'resume' | 'contact' | undefined

const PublicationViewer = () => {
const { section } = useParams<{ section: Section }>();

const publicationMapper = (section: Section) => {
    switch (section) {
        case 'skills':
            return <Skills />;
        case 'projects':
            return <Projects />
        case 'resume':
            return <Resume />
        case 'contact':
            return <Contact />
        case 'home':
            return <Home />
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