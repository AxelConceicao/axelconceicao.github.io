import emoji from 'react-easy-emoji'

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
  name: 'Axel Conceicao',
  title: 'Bonjour 👋,',
  description:
    "Je m'appelle Axel Conceicao j'ai 22 ans et je suis étudiant en 4e année à l'Epitech. Passionné d'informatique et de la culture numérique mon objectif sur le long terme serait de travailler dans le développement web et plus précisément dans le front-end.",
  resumeLink: 'https://cvdesignr.com/p/60a3b0803bac1?hl=fr_FR',
}

export const openSource = {
  githubUserName: 'AxelConceicao',
}

export const contact = {}

export const socialLinks = {
  // "facebook": "https://www.facebook.com/1hanzla100",
  // "instagram": "https://www.instagram.com/1hanzla100",
  // "twitter": "https://twitter.com/1hanzla100",
  github: 'https://github.com/AxelConceicao',
  linkedin: 'https://www.linkedin.com/in/axelconceicao/',
}

export const skillsSection = {
  title: 'Mes compétences',
  // subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji('⚡ Développement front-end intéractif pour vos applications web.'),
    emoji('⚡ Conception web entièrement responsive et portable sur mobile.'),
    emoji('⚡ Communiquer avec le back-end de l’application grâce à une API'),
  ],

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'vscode-icons:file-type-html',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'vscode-icons:file-type-css',
    },
    // {
    //   skillName: 'sass',
    //   fontAwesomeClassname: 'logos:sass',
    // },
    {
      skillName: 'vuejs',
      fontAwesomeClassname: 'vscode-icons:file-type-vue',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'logos:javascript',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'logos:python',
    },
    // {
    //   skillName: 'TypeScript',
    //   fontAwesomeClassname: 'logos:typescript-icon',
    // },
    {
      skillName: 'django',
      fontAwesomeClassname: 'vscode-icons:file-type-django',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
    },
    {
      skillName: 'reactnative',
      fontAwesomeClassname: 'vscode-icons:file-type-reacttemplate',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'logos:nodejs-icon',
    },
    // {
    //   skillName: 'flutter',
    //   fontAwesomeClassname: 'logos:flutter',
    // },
    // {
    //   skillName: 'swift',
    //   fontAwesomeClassname: 'vscode-icons:file-type-swift',
    // },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'vscode-icons:file-type-npm',
    },
    // {
    //   skillName: 'sql-database',
    //   fontAwesomeClassname: 'vscode-icons:file-type-sql',
    // },
    {
      skillName: 'mongoDB',
      fontAwesomeClassname: 'vscode-icons:file-type-mongo',
    },
    // {
    //   skillName: 'aws',
    //   fontAwesomeClassname: 'logos:aws',
    // },
    // {
    //   skillName: 'firebase',
    //   fontAwesomeClassname: 'logos:firebase',
    // },
    {
      skillName: 'git',
      fontAwesomeClassname: 'logos:git-icon',
    },
    // {
    //   skillName: 'docker',
    //   fontAwesomeClassname: 'logos:docker-icon',
    // },
  ],
}

export const SkillBars = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
]

export const educationInfo = [
  {
    schoolName: 'Epitech',
    logo: {
      name: 'epitech',
      height: '68px',
    },
    subHeader: 'Expert en technologie de l’information',
    duration: 'De 2017 à 2022',
    desc: 'Le programme Grande École Epitech ',
    descBullets: [
      'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    schoolName: 'Dublin City University',
    logo: {
      name: 'dcu',
      height: '90px',
    },
    subHeader: 'Engineering and Computing (ECSAO)',
    duration: 'De Septembre 2020 à Mai 2021',
    desc: "Le programme d'études à l'étranger de DCU m'a permit de consolider mes compétences acquises à Epitech et en acquérir de nouvelles.",
    descBullets: ['Lorem ipsum dolor sit amet, consectetfgur adipiscing elit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
  },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Google',
    companylogo: googlelogo,
    date: 'June 2018 – Present',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    descBullets: [
      'Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Github',
    companylogo: github,
    date: 'May 2017 – May 2018',
    desc: 'Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Airbnb',
    companylogo: airbnb,
    date: 'Jan 2015 – Sep 2015',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const projects = [
  {
    name: 'lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    name: 'lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    name: 'lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    link: {
      name: 'hanzla',
      url: 'kasjfklsdjf',
    },
  },
]
