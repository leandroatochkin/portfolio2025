import { useParams } from 'react-router-dom'
import PhotoPost from './category/PhotoPost';

type PublicationType = 'photo' | 'blog' | 'article' | 'news' | 'update' | 'story' | 'post' | undefined;

const PublicationViewer = () => {
const { publication } = useParams<{ publication: PublicationType }>();

const publicationMapper = (publicationType: PublicationType) => {
    switch (publicationType) {
        case 'photo':
            return <PhotoPost />;
        // Add cases for other categories like 'blogs', 'articles', etc.
        default:
            return <div>Category not found</div>;
    }
}

  return (
    <>
    {
        publicationMapper(publication)
    }
    </>
  )
}

export default PublicationViewer