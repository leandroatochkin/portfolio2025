import React from 'react'
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const About = () => {
const theme = useSelector((state: RootState) => state.theme);


  return (
    <div
    style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100dvh',
        width: '100vw',
        fontSize: '24px',
        fontWeight: 'bold',
        color: theme.colors.text,
        background: theme.colors.background
    }}
    >About</div>
  )
}

export default About