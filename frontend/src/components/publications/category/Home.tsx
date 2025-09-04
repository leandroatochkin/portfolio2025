import React from 'react'
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { useNavigate } from "react-router-dom";
import { useMobile } from '../../../hooks/hooks';

const Home = () => {
const theme = useSelector((state: RootState) => state.theme);
const isMobile = useMobile();

  return (
    <div
     style={{
        background: 'transparent',
        height: '100dvh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}
    >
        <div
        style={{
            height: '85%',
            width: '85%',
            background: `linear-gradient(135deg, #1f2937 0%, #8b5cf6 100%)`,
            borderRadius: theme.borderRadius,
        }}
        >
            <h1
            style={{
                color: '#ffffff',
                fontSize: !isMobile ? theme.fontSizes.xxxlarge : theme.fontSizes.xxlarge,
                textAlign: 'center',
            }}
            >
                Leandro Atochkin
            </h1>
            <p
            style={{
                color: '#ffffff',
                fontSize: !isMobile ? theme.fontSizes.xlarge : theme.fontSizes.large,
                textAlign: 'center',
            }}
            >
                Fullstack developer | Builder
                Product oriented | Learner
            </p>
        </div>
    </div>
  )
}

export default Home