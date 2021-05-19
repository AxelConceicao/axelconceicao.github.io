import emoji from 'react-easy-emoji'

// import googlelogo from './assets/img/icons/common/google.svg'
// import github from './assets/img/icons/common/github.svg'
// import airbnb from './assets/img/icons/common/airbnbLogo.png'

import polaris_logo from './assets/img/polaris.png'
import elsystem_logo from './assets/img/elsystem.png'
import pa_logo from './assets/img/pa.png'

export const greetings = {
  name: 'Axel Conceicao',
  title: 'Bonjour 👋,',
  description:
    "Je m'appelle Axel Conceicao j'ai 22 ans et je suis étudiant en 4e année à l'Epitech. Passionné d'informatique et de la culture numérique mon objectif professionnel serait de travailler dans le développement web et plus précisément dans le front-end.",
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
    emoji('⚡ Développement front-end intéractif pour vos applications web'),
    emoji('⚡ Conception web entièrement responsive et portable sur mobile'),
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
      height: '60px',
      color: '#006AB2',
    },
    subHeader: 'Expert en technologie de l’information',
    duration: 'De 2017 à 2022',
    desc: 'Le programme Grande Ecole est le cursus historique d’Epitech et se déroule en 5 ans. A Epitech, on apprend à apprendre grâce à une pédagogie unique par projets.',
    descBullets: [],
    more: 'https://www.epitech.eu/fr/pedagogie-projets/',
  },
  {
    schoolName: 'Dublin City University',
    logo: {
      name: 'dcu',
      height: '90px',
      color: '#003D68',
    },
    subHeader: 'Engineering and Computing (ECSAO)',
    duration: 'De Septembre 2020 à Mai 2021',
    desc: "Le programme d'études à l'étranger de DCU m'a permit de consolider mes compétences acquises à Epitech et en acquérir de nouvelles.",
    descBullets: [],
    more: 'https://www.dcu.ie/international/about-the-dcu-study-abroad-programme',
  },
]

export const experience = [
  {
    role: 'Développeur Front-End',
    company: 'Polaris',
    status: "Projet de fin d'étude",
    color: '#064E74',
    companylogo: polaris_logo,
    logowidth: '150px',
    date: 'Décembre 2019 – Présent',
    // desc: "Polaris a été créé dans le cadre de notre projet de fin d'étude au sein d'EPITECH en partenariat avec l'institut Pasteur et a pour but d'aider les spécialistes à mieux déceler la bipolarité chez les patients souffrant de trouble de l'humeur.",
    descBullets: [
      "Développement front-end d'un site Web d'administration en NuxtJS et VueJS",
      "Conception d'un site moderne, intuitif et entièrement responsive grâce à la librairie Buefy (Bulma)",
      'Aide à la mise en place de requests GraphQL en Javascript',
    ],
  },
  {
    role: 'Développeur Front-End',
    color: '#020202',
    status: 'Alternance',
    company: 'EL SYSTEM',
    companylogo: elsystem_logo,
    logowidth: '300px',
    date: 'Septembre 2019 – Mars 2020',
    desc: "Conception et développement front-end d'une boutique en ligne administrable avec gestion de contenu sur-mesure (HTML5/CSS3, Vue.js, Vuetify, Django)",
  },
  {
    role: 'Stage en entreprise',
    company: 'Pricing Assistant',
    status: 'Stage',
    color: '#267FBE',
    companylogo: pa_logo,
    logowidth: '300px',
    date: 'Juillet 2018 – Octobre 2018',
    descBullets: [
      "Extraction de données web (HTML5 & CSS3)",
      "Développement de webhooks Slack & Discord (Python)",
    ],
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
