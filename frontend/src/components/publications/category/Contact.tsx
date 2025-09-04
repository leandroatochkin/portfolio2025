import React from 'react'
import type { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { Github, Mail, Linkedin } from 'lucide-react';
import { handleMouseEnter, handleMouseLeave } from '../../utils';
//import { useNavigate } from "react-router-dom";

const Contact = () => {
const theme = useSelector((state: RootState) => state.theme);


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
                    background: theme.colors.surface,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: theme.spacing.large,
                    borderRadius: theme.borderRadius,
                    width: '60%',
                }}
                >
                    <h1
                    style={{
                        color: theme.colors.text
                    }}
                    >
                        contact
                    </h1>
                    <p
                    style={{
                        color: theme.colors.text
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
                        marginTop: theme.spacing.large,
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
    </div>
  )
}

export default Contact