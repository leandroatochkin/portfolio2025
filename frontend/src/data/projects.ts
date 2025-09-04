import type { Project } from "../components/cards/ProjectCard";

export const projects: Project[] = [
        {
        title: 'Blogging App',
        pictures: [
            '/projects/blog/blog1.png',
            '/projects/blog/blog2.png',
            '/projects/blog/blog3.png',
        ],
        description: 'A blogging app for posting pics, stories, updates, etc. Work in progress.',
        stack: [
            'typescript',
            'react',
            'Redux/RTK',
            'GSAP',
        ],
        repo: 'https://github.com/leandroatochkin/blogProject',
        demo: 'https://blogproject-ig98.onrender.com/'
    },
    {
        title: 'Spotify playlist creator',
        pictures: [
            '/projects/spot/spot2.png',
            '/projects/spot/spot1.png',
        ],
        description: `Text-to-playlist translator app. Enter your songs, hit create playlist and it's done.`,
        stack: [
            'typescript',
            'react',
            'Express',
            'Spotify API',
        ],
        repo: 'https://github.com/leandroatochkin/SpotPlaylistGen',
        demo: 'https://spotplaylistgen-1.onrender.com'
    },
    {
        title: 'ALKI',
        pictures: [
            '/projects/alki/alki1.jpg',
            '/projects/alki/alki2.jpg',
            '/projects/alki/alki3.jpg',
            '/projects/alki/alki4.jpg',
            '/projects/alki/alki5.jpg',
            '/projects/alki/alki6.jpg',
            '/projects/alki/alki7.jpg',
            '/projects/alki/alki8.jpg',
            '/projects/alki/alki9.jpg',
        ],
        description: 'An app designed to ease the task of managing multiple properties for landlords or realtors. Users can keep track of tenants, properties, inventories, contracts and create work groups.',
        stack: [
            'typescript',
            'react',
            'MUI',
            'Auth0',
            'Express',
            'MySQL',
            'Supabase',
            'Redux/RTK'
        ]
    },
    {
        title: 'Order Tracking App',
        pictures: [
            '/projects/elea/elea.png',
        ],
        description: 'A blank slate app to track item progression through a RESTful API. The objective is to fork this app and adapt it to each customer needs.',
        stack: [
            'typescript',
            'react',
            'Express',
            'PSQL',
        ],
        repo: 'https://github.com/leandroatochkin/ELEA',
        demo: 'https://elea-frontend.onrender.com/?itemId=123456789123456789123456789123456789'
    },
    {
        title: 'Pampa Tokens',
        pictures: [
            '/projects/pampatokens/pt1.png',
            '/projects/pampatokens/pt2.png',
            '/projects/pampatokens/pt3.png',
            '/projects/pampatokens/pt4.png',
        ],
        description: 'A web platform for trading tokens backed on land production. Users can buy and sell tokens and keep track of their portfolios. Custom auth and mail transport system.',
        stack: [
            'typescript',
            'react',
            'MUI',
            'Express',
            'MySQL',
            'Supabase',
            'zustand',
            'Tanstack Query',
            'framer-motion'
        ],
        repo: 'https://github.com/leandroatochkin/pampatokenlanding',
        demo: 'https://www.pampatokens.com.ar'
    },
    {
        title: 'Order Tracking App',
        pictures: [
            '/projects/elea/elea.png',
        ],
        description: 'A blank slate app to track item progression through a RESTful API. The objective is to fork this app and adapt it to each customer needs.',
        stack: [
            'typescript',
            'react',
            'Express',
            'PSQL',
        ],
        repo: 'https://github.com/leandroatochkin/ELEA',
        demo: 'https://elea-frontend.onrender.com/?itemId=123456789123456789123456789123456789'
    },
    {
        title: 'Landing Page',
        pictures: [
            '/projects/landing/landing.png',
        ],
        description: 'Simple landing page for a sustainability focused business.',
        stack: [
            'javascript',
            'astro',
            'GSAP',
        ],
        repo: 'https://github.com/leandroatochkin/sustainabilitylanding',
        demo: 'https://sustainabilitylanding.vercel.app/'
    },
    
]