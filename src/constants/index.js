import { dicoding, winnicode } from '../assets/images';
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
  tailwindcss,
  threads,
  typescript,
  go,
  python,
  figma,
  sass,
  shadcn,
  postgresql,
  mysql,
  docker,
  postman,
  vscode,
  npm,
} from '../assets/icons';

export const skills = [
  {
    delay: -0.3,
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    delay: -0.9,
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    delay: -0.9,
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    delay: -0.9,
    imageUrl: go,
    name: 'Go',
    type: 'Backend',
  },
  {
    delay: -0.9,
    imageUrl: python,
    name: 'Python',
    type: 'Backend',
  },
  {
    delay: -0.6,
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    delay: -1.2,
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    delay: -1.2,
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    delay: -2.7,
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    delay: -2.7,
    imageUrl: shadcn,
    name: 'Shadcn UI',
    type: 'Frontend',
  },
  {
    delay: -1.5,
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    delay: -3,
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    delay: -3.6,
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
  {
    delay: -3.3,
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    delay: -1.8,
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    delay: -2.4,
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    delay: -2.4,
    imageUrl: postgresql,
    name: 'PostgreSQL',
    type: 'Database',
  },
  {
    delay: -2.4,
    imageUrl: mysql,
    name: 'MySQL',
    type: 'Database',
  },
  {
    delay: -2.4,
    imageUrl: docker,
    name: 'Docker',
    type: 'DevOps',
  },
  {
    delay: -2.4,
    imageUrl: postman,
    name: 'Postman',
    type: 'API Testing',
  },
  {
    delay: -2.4,
    imageUrl: vscode,
    name: 'VS Code',
    type: 'IDE',
  },
  {
    delay: -2.4,
    imageUrl: npm,
    name: 'npm',
    type: 'Package Manager',
  },
  {
    delay: -2.1,
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    delay: -3.9,
    imageUrl: figma,
    name: 'Figma',
    type: 'UI/UX',
  },
];

export const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'PT. Winnicode Garuda Teknologi',
    icon: winnicode,
    iconBg: '#FFB5E1',
    date: 'Agu 2024 - Nov 2024',
    points: [
      'Developed web applications using React, ExpressJS (NodeJS)',
      'Designed and developed RESTful APIs to ensure efficient data exchange.',
      'Implemented features such as token-based authentication and dynamic data management.',
      'Handled debugging and troubleshooting during development.',
    ],
  },
  {
    title: 'React and Back-End Developer',
    company_name: 'MSIB Kampus Merdeka - Dicoding Indonesia',
    icon: dicoding,
    iconBg: '#8CC4FF',
    date: 'Feb 2024 - Jun 2024',
    points: [
      'Learning classes from Basic Web Programming to React Expert, incorporating both Hard Skills and Soft Skills.',
      'Build Final Capstone Project, Crowdfunding Website "Bersama Palestina". The project using Tech Stack : ReactJS, TailwindCSS, Redux, and Google Auth for Login.',
      'Collaborating with cross-functional teams including product manager and Back-End developer to create high-quality website.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
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
