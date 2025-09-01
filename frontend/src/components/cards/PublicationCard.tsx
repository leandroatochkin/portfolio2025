import React from 'react'
import type { RootState } from '../../store/store';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import type { Details } from '../../api/publicationsApi';
import gsap from 'gsap';

interface PublicationCardProps {
    thumbnail: string;
    title: string;
    details: Details;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ 
    thumbnail,
    title,
    details
}) => {
      const theme = useSelector((state: RootState) => state.theme);
      const navigate = useNavigate();

      const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        // highlight hovered one
        gsap.to(e.currentTarget, {
          backgroundSize: "105%", 
          scale: 1.02, 
          zIndex: 10, 
          filter: "blur(0px)", 
          duration: 0.3, 
          ease: "power2.out" 
        });
      };

      const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        // reset hovered one
        gsap.to(e.currentTarget, { 
            backgroundSize: "102%", 
            scale: 1, 
            zIndex: 1, 
            duration: 0.3, 
            ease: "power2.out" 
        });
        };
      

  return (
    <div

        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
            navigate(`/${details.category}/${details.id}`, {viewTransition: true})
        }}

    style={{
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: theme.borderRadius,
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        cursor: 'pointer',
        height: '100%',
        width: '100%',
        }}
    >
        <div
        style={{
            width: '95%',
            height: '40%',
            background: theme.colors.surface,
        }}
        >
            <h2
            style={{
                color: theme.colors.text,    
                fontSize: theme.fontSizes.medium,
                fontWeight: 700,
                margin: '8px 0 4px 8px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            }}
            >
            {title}
            </h2>
            {details.subtitle && (
            <h3
            style={{
                color: theme.colors.text,
                fontSize: theme.fontSizes.small,
                fontWeight: 500,
                margin: '0 0 4px 8px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            }}
            >
            {details.subtitle}
            </h3>
            )}
            {details.author && (
            <p
            style={{
                color: theme.colors.text,
                fontSize: theme.fontSizes.small,
                fontWeight: 400,
                margin: '0 0 8px 8px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            }}
            >
            By {details.author}
            </p>
            )}

        </div>
    </div>
  )
}

export default PublicationCard