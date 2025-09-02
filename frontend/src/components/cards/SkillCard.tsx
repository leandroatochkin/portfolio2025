import React from 'react'
import type { RootState } from '../../store/store';
import { useSelector } from "react-redux";
import gsap from 'gsap';

interface PublicationCardProps {
    logo: string;
    title: string;
}

const SkillCard: React.FC<PublicationCardProps> = ({ 
    logo,
    title,
}) => {
      const theme = useSelector((state: RootState) => state.theme);

      const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, item: string) => {
        // highlight hovered one
        gsap.to(e.currentTarget, {
          backgroundSize: "105%", 
          scale: 1.02, 
          zIndex: 10, 
          filter: "blur(0px)", 
          duration: 0.3, 
          ease: "power2.out",
          width: item.length > 14 ? '250px' : '100%' 
        });
      };

      const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>, item: string) => {
        // reset hovered one
        gsap.to(e.currentTarget, { 
            backgroundSize: "102%", 
            scale: 1, 
            zIndex: 1, 
            duration: 0.3, 
            ease: "power2.out" ,
            width: item.length > 14 ? '150px' : '100%'
        });
        };
      

  return (
    <div

        onMouseEnter={(e)=>handleMouseEnter(e, title)}
        onMouseLeave={(e)=>handleMouseLeave(e, title)}
        

    style={{
        background: theme.colors.surface,
        borderRadius: theme.borderRadius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        cursor: 'pointer',
        height: '40px',
        width: '150px',
        padding: '2px',
        gap: '10px'
        }}
    >
        <img 
        src={logo} 
        alt={title}
        style={{
            height: '40px'
        }}
        />
        
            <p
            style={{
                color: theme.colors.text,    
                fontSize: theme.fontSizes.small,
                fontWeight: 700,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            }}
            >
            {title}
            </p>
 
    </div>
  )
}

export default SkillCard