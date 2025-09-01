import React from 'react'
import CommentsSection from '../../comments/CommentsSection'
import type { Publication } from '../../../api/publicationsApi'
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';

interface PhotoPostProps {
    publication?: Publication;
}

const PhotoPost: React.FC<PhotoPostProps> = ({ publication }) => {
   
const theme = useSelector((state: RootState) => state.theme);
    
  return (
    <div
    style={{
        background: theme.colors.surface,
        height: '100dvh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    }}
    >
        <img 
        src={publication?.imageUrl || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} 
        alt="Sample Photo" 
        style={{ 
            width: '100%', 
            height: 'auto', 
        }}
        />
    <div>
    <p 
        style={{ 
            marginTop: '1rem', 
            fontSize: theme.fontSizes.medium,
            color: theme.colors.text 
            }}>
            {publication?.description || 'No description provided.'}
        </p>
        <p
        style={{
            fontSize: theme.fontSizes.small,
            color: theme.colors.text,
        }}
        >
            Posted by <strong>{publication?.authorName || 'Unknown Author'}</strong> on {new Date(publication?.createdAt ?? '').toLocaleDateString()}
        </p>
            </div>
        <CommentsSection publicationId={publication?.id ?? ''} publicationType="photo" />
    </div>
  )
}

export default PhotoPost