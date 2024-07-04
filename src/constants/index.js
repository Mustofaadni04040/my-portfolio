import { indosat, dicoding } from '../assets/images';
import {
  // car,
  css,
  estate,
  express,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  // snapgram,
  // summiz,
  tailwindcss,
  threads,
  // typescript,
  figma,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
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
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
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
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  // {
  //   imageUrl: typescript,
  //   name: 'TypeScript',
  //   type: 'Frontend',
  // },
  {
    imageUrl: figma,
    name: 'Figma',
    type: 'UI/UX',
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
      'Created a replica of the popular discussion platform "Threads", enabling users to post threads and engage in threaded conversations.',
    link: 'https://tweety-apps.vercel.app',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-red',
    name: '"NetNotes." Notes App',
    description:
      'Designed and built a website app for taking and managing notes efficiently, features include login user, register, add note, delete note, archived note, search note functionality and support 2 languege (Bahasa Indonesia and English).',
    link: 'https://netnotes.vercel.app',
  },
];
