import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Akanksha Verma | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is',
  name: 'Akanksha Verma.',
  subtitle: 'Software Developer',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'dp.jpeg',
  paragraphOne: 'I am a CSE Student at Lovely Professional University, having holistic knowledge over software development,IT Support and also experienced in Dev-Ops.',
  paragraphTwo: 'My objective is to have growth oriented and challenging career where I can contribute my knowledge and skills to the organization and enhance my experience through continuous learning and teamwork.',
  paragraphThree: 'My Skills include : HTML/CSS/JS, JAVA, C/C++, PYTHON, GIT & GITHUB and Google Cloud Platform.',
  
  resume: 'https://drive.google.com/file/d/1C0Ho9CmzG_ecX3gIymNWyATntO_MsSuy/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bot.png',
    title: 'Chat-Bot',
    info: 'Chatbots, as the name suggests, are computer programs built to simulate human conversations— whether that is on a website, a messaging app, or a virtual assistant.',
    info2: 'It has a generic chatbot and a covid bot specialized to handle covid related queries. It is built using Tkinter, Dictionaries and few other Python packages.',
    url: 'https://github.com/Akanksha-Verma31/Chat-Bot-Python-Project',
    repo: '', // if no repo, the button will not show up
  },
  
  {
    id: nanoid(),
    img: 'tourism.png',
    title: 'Tourism Website',
    info: 'The core idea of the Project is to build a sample prototype Tourism Website with QnA Bot for the worldWide population with the help of HTML, CSS, JAVASCRIPT, BOOTSTRAP, and AZURE SERVICES.',
    info2: 'Across a wide range of industries, chatbots have been an efficiency-enhancing way for business teams to interact with their customers.',
    url: 'https://akanksha-verma31.github.io/Tourism-Website/',
    repo: 'https://github.com/Akanksha-Verma31/Tourism-Website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gcp.jpg',
    title: 'Google Cloud Platform',
    info: 'Participated in 30 days of Google Cloud and Google Cloud Ready Facilitator program, during which I completed several Qwiklabs tasks and projects.',
    info2: 'I learnt about Load Balancers, Vms, Kubernetes, TensorFlow, Docker, Jenkins, Spinnaker and CloudSQL',
    url: 'https://www.cloudskillsboost.google/public_profiles/6b777d0b-ced7-4fee-b1d0-5a6712888ee5',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fitness.png',
    title: 'Fitness Club Website',
    info: 'A Basic website for a fitness club with 5 Pages consisting details of Training, Time-Table, Nutrition and etc.',
    info2: 'Used basic Javascript to make it a responsive website for all types of devices and currently hosting it on GitHub.',
    url: 'https://akanksha-verma31.github.io/Fitness-Club-Website/',
    repo: 'https://github.com/Akanksha-Verma31/Fitness-Club-Website', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cer.png',
    title: 'Certifications',
    info: 'I have Certifications for Google IT Support, Google IT Automation, AWS Academy Graduate, Google Project Management, IT Automation and several others.',
    info2: 'Check out more of my cerificates using the link below.',
    url: 'https://www.credly.com/users/akanksha_verma31/badges',
    repo: 'https://drive.google.com/drive/folders/1Gf8vY3nSXc7DP7aHBxVEekORFjvC_Y-l?usp=sharing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Let\'s Talk',
  email: '22906.akanksha@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/akankshaverma31/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Akanksha-Verma31',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
