import { indosat, dicoding } from '../assets/images';
import {
  car,
  css,
  estate,
  express,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: motion,
    name: 'Motion',
    type: 'Animation',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
];

export const experiences = [
  {
    title: 'React Developer and Back-End',
    company_name: 'MSIB Kampus Merdeka - Dicoding Indonesia',
    icon: dicoding,
    iconBg: '#8CC4FF',
    date: 'Feb 2024 - Present',
    points: [
      'Learning classes from Basic Web Programming to React Expert, incorporating both Hard Skills and Soft Skills.',
      'Build Final Capstone Project, Crowdfunding Website "Bersama Palestina". The project using Tech Stack : ReactJS, TailwindCSS, Redux, and Google Auth for Login.',
      'Collaborating with cross-functional teams including product manager and Back-End developer to create high-quality website.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React Developer',
    company_name: 'ID-Camp - Indosat Oooredoo Hutchison Digital Camp',
    icon: indosat,
    iconBg: '#FFE190',
    date: 'Sept 2023 - Okt 2023',
    points: [
      'Learning experience designed to develop skills in web development, particularly in React.',
      'Covered a wide range of topics from the basics of web programming to advanced concepts in React, incorporating both hard skills and soft skills essential for a professional developer.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/Mustofaadni04040',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/mustofa-adny-a64791217',
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-green',
    name: 'Crowdfunding Website',
    description:
      'Crowdfunding platform specifically to support fundraising for palestine. It provides for register user, login, donations list, user profile and payment for donation using midtrans.',
    link: 'https://bersama-palestina.vercel.app',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-blue',
    name: '"Tweety Apps" Threads App',
    description:
      'Created a replica of the popular discussion platform "Threads," enabling users to post threads and engage in threaded conversations.',
    link: 'https://tweety-apps.vercel.app',
  },
  {
    iconUrl: car,
    theme: 'btn-back-red',
    name: 'Car Finding App',
    description:
      'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Full Stack Instagram Clone',
    description:
      'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/adrianhajdin/social_media_app',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Real-Estate Application',
    description:
      'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/adrianhajdin/projects_realestate',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'AI Summarizer Application',
    description:
      'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  },
];
