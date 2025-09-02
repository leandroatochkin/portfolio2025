import { useParams } from 'react-router-dom'
//import { useGetPublicationsByCategoryQuery } from '../../api/publicationsApi';
import PublicationCard from '../../components/cards/SkillCard';
import type { Publication } from '../../api/publicationsApi';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';

// Mock publication data
const mockPublications: Publication[] = [
  {
    id: "1",
    userId: "u1",
    thumbnail: "/image1.jpg",
    description: "Beautiful sunset at the beach",
    authorName: "Alice Johnson",
    createdAt: "2025-09-01",
    publicationType: "photo",
  },
  {
    id: "2",
    userId: "u2",
    thumbnail: "/image2.jpg",
    description: "My journey learning React",
    authorName: "Bob Smith",
    createdAt: "2025-08-28",
    publicationType: "photo",
  },
  {
    id: "3",
    userId: "u3",
    thumbnail: "/image3.jpg",
    description: "Top 10 productivity hacks",
    authorName: "Charlie Davis",
    createdAt: "2025-08-30",
    publicationType: "photo",
  },
  {
    id: "4",
    userId: "u4",
    thumbnail: "/image4.jpg",
    description: "A short story about teamwork",
    authorName: "Dana Lee",
    createdAt: "2025-09-01",
    publicationType: "photo",
  },
];


export type Category = 'photos' | 'blogs' | 'articles' | 'news' | 'updates' | 'stories' | undefined;

const CategoryView = () => {

const { category } = useParams<{ category: Category }>();

      const theme = useSelector((state: RootState) => state.theme);

const { data = mockPublications, error, isLoading } = {
  data: mockPublications,
  error: null,
  isLoading: false,
};


  const publicationsMapper = (data: Publication[]) => data?.map((pub: Publication) => (
    <PublicationCard
        key={pub.id}
        thumbnail={pub.thumbnail || ''}
        title={pub.description}
        details={{
            id: pub.id,
            title: pub.description,
            author: pub.authorName,
            date: pub.createdAt,
            subtitle: pub.description,
            category: pub.publicationType
        }}
    />
  ));

  if(isLoading) return <p>Loading...</p>;
  if(error) return <p>Error loading publications.</p>;
      

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
      style={{padding: '16px', background: theme.colors.background, minHeight: '100vh', color: theme.colors.text}}
      >
  
    
            <h1>Category: {category}</h1>

                <Masonry
                gutter="16px"
                >
                    {data && publicationsMapper(data)}
                </Masonry>
        

    

        </ResponsiveMasonry>
  )
}

export default CategoryView