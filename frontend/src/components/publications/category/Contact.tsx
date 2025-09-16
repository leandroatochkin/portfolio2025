import type { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { Github, Mail, Linkedin } from 'lucide-react';
import { handleMouseEnter, handleMouseLeave } from '../../utils';
import DownloadButton from '../../buttons/DownloadButton';
import { useMobile } from '../../../hooks/hooks';
//import { useNavigate } from "react-router-dom";

const Contact = () => {
const theme = useSelector((state: RootState) => state.theme);
const isMobile = useMobile()

  return (
    
                <div
                style={{
                    background: theme.colors.surface,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: !isMobile ?  theme.spacing.medium : theme.spacing.small,
                    borderRadius: theme.borderRadius,
                    width: '60%',
                    height: 'fit-content',
                    maxHeight: '50%'
                }}
                >
                    <h1
                    style={{
                        color: theme.colors.text,
                        fontSize: !isMobile ? theme.fontSizes.xxlarge : theme.fontSizes.large,
                        margin: '0 0 0.5rem 0'
                    }}
                    >
                        say hello!
                    </h1>
                    <DownloadButton />
                    <p
                    style={{
                        color: theme.colors.text,
                        textAlign: 'center',
                        fontSize: !isMobile ? theme.fontSizes.medium : theme.fontSizes.small
                    }}
                    >
                        I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out.
                    </p>
                    <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width: '100%',
                        marginTop: !isMobile ? theme.spacing.medium : 0
                    }}
                    >   
                    <div
                    style={{
                        cursor: 'pointer',
                    }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                            <a
                            href='https://github.com/leandroatochkin' target='_blank' rel='noopener noreferrer'
                            ><Github/></a>
                    </div>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                        cursor: 'pointer',
                    }}
                    >
                            <a
                            href='https://www.linkedin.com/in/leandroatochkin' target='_blank' rel='noopener noreferrer'
                            ><Linkedin/></a>
                    </div>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                        cursor: 'pointer',
                    }}
                    >
                            <a
                            href="mailto:leandronatochkin@gmail.com?subject=Hello!!!&body=I%20wanted%20to%20reach%20out..."
                            ><Mail/></a>
                    </div>
                        
                    </div>
                </div>

  )
}

export default Contact