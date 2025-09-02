import React from 'react'
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import SkillCard from '../../cards/SkillCard';
import { useMobile } from '../../../hooks/hooks';
import { 
    frontend,
    backend,
    production,
    methodologies,
    currentlyLearning
} from '../../../data/skills';


const Skills: React.FC = () => {
   
const theme = useSelector((state: RootState) => state.theme);
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
        <h1
        style={{
            color: theme.colors.text,
            marginTop:  isMobile ? '80px' : ''
        }}
        >
            Technical skills
        </h1>
    
 

                <div
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                                        gap: '10px'

                }}
                >
                <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: isMobile ? 'column' : 'row',

                }}
                >
                <h2
                    style={{
                    transform: !isMobile ? 'rotate(270deg)' : '',
                    display: 'inline-block',
                    marginRight: '-10px', // pull it closer
                    color: theme.colors.text
                    }}
                >
                    frontend
                </h2>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                }}
                >
                    {frontend.map((item, i) => (
                    <SkillCard key={i} title={item.tech} logo={item.image} />
                    ))}
                </div>
                </div>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                >
                <h2
                    style={{
                    display: 'inline-block',
                    marginRight: '-10px', // pull it closer
                    color: theme.colors.text
                    }}
                >
                    backend
                </h2>
                <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
            }}
                >
                    {backend.map((item, i) => (
                    <SkillCard key={i} title={item.tech} logo={item.image} />
                    ))}
                </div>
                <h2
                    style={{
                    display: 'inline-block',
                    marginRight: '-10px', // pull it closer
                    color: theme.colors.text
                    }}
                >
                    methodologies
                </h2>
                <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
            }}
                >
                    {methodologies.map((item, i) => (
                    <SkillCard key={i} title={item.tech} logo={item.image} />
                    ))}
                </div>
                <h2
                    style={{
                    display: 'inline-block',
                    marginRight: '-10px', // pull it closer
                    color: theme.colors.text
                    }}
                >
                    learning now
                </h2>
                <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
            }}
                >
                    {currentlyLearning.map((item, i) => (
                    <SkillCard key={i} title={item.tech} logo={item.image} />
                    ))}
                </div>
                </div>
                <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: !isMobile ? '15px' : 0,
                    flexDirection: isMobile ? 'column-reverse' : 'row',
                }}
                >
                
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                }}
                >
                    {production.map((item, i) => (
                    <SkillCard key={i} title={item.tech} logo={item.image} />
                    ))}
                </div>
                <h2
                    style={{
                    transform: !isMobile ? 'rotate(90deg)' : '',
                    display: 'inline-block',
                    marginLeft: '-10px', // pull it closer
                    color: theme.colors.text
                    }}
                >
                    production
                </h2>
            </div>
        </div>
                
    

    </div>
  )
}

export default Skills