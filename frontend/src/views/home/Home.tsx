import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { useMobile } from '../../hooks/hooks';
import Contact from '../../components/publications/category/Contact';

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
            height: !isMobile ? '90%' : 'fit-content',
            paddingBottom: '1rem',
            width: !isMobile ? '80%' : '85%',
            background: `linear-gradient(135deg, #1f2937 0%, #8b5cf6 100%)`,
            borderRadius: theme.borderRadius,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <h1
            style={{
                color: '#ffffff',
                fontSize: !isMobile ? theme.fontSizes.xxxlarge : theme.fontSizes.xxlarge,
                textAlign: 'center',
                margin: 0
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
                {`Fullstack developer | Builder ${!isMobile ? '|' : ''} Product oriented | Learner`}
            </p>
              <Contact />
        </div>
      
    </div>
  )
}

export default Home