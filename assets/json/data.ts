import {RiComputerLine} from "react-icons/ri";
import {FaServer} from "react-icons/fa";
import {AiOutlineApi, AiOutlineConsoleSql} from "react-icons/ai";
import {IProject, IServices, ISkill} from "../../type/type";
import {BsCircleFill} from "react-icons/bs";

export const services: IServices[] = [
    {
        title: 'Frontend Developer',
        about: 'I specialized in the Frontend area. Have been working in the frontend development for more than 2 years now. React and vue is my daily bread :)',
        Icon: RiComputerLine,
    },
    {
        title: 'Backend Developer',
        about: 'I have been learning Backend Development for more than 6 months now. I mainly uses Golang or Python for server logic and API.',
        Icon: FaServer,
    },
    {
        title: 'Dev Ops',
        about: 'For Versioning, I have always used git. For Deployment, most of the time I will be using services from AWS (amplify, ec2, route53, beanstalk, etc)',
        Icon: AiOutlineApi
    },
    {
        title: 'Database',
        about: 'I have tried both SQL and NoSQL for database and deployed it to server <br/><b>SQL:</b> PostgreSQL, MySQL<br/> <b>NoSQL:</b> MongoDb',
        Icon: AiOutlineConsoleSql,
    }
]

export const languages: ISkill[] = [
    {
        name: 'HTML',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'CSS',
        level: '87%',
        Icon: BsCircleFill
    },
    {
        name: 'JavaScript',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name: 'TypeScript',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'CSS Preprocessor',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name: 'Go',
        level: '65%',
        Icon: BsCircleFill
    },
    {
        name: 'Python',
        level: '60%',
        Icon: BsCircleFill
    },
    {
        name: 'SQL',
        level: '50%',
        Icon: BsCircleFill
    }
]

export const frameworks: ISkill[] = [
    {
        name: 'ReactJs',
        level: '85%',
        Icon: BsCircleFill
    },
    {
        name: 'VueJs',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'NextJs',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'NuxtJs',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'Material UI',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Element UI',
        level: '90%',
        Icon: BsCircleFill
    },
    {
        name: 'TailwindCSS',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'Framer Motion',
        level: '70%',
        Icon: BsCircleFill
    },
]

export const projects: IProject[] = [
    {
        name: 'Portfolio Website',
        category: ['React'],
        deployed_url: 'https://barlydjaja.com',
        description: 'This is my personal portfolio website. You can view part of my work here',
        github_url: 'https://github.com/barlydjaja/portfolio-web',
        image_path: 'portfolio.PNG',
        tags: ['NextJS', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
    },
    {
        name: 'Koranovel',
        category: ['React'],
        deployed_url: 'https://master.d6oquw9uhr0gb.amplifyapp.com/',
        description: 'I created this website for my girlfriend. She is a writer',
        github_url: 'https://github.com/barlydjaja/koranovel',
        image_path: 'koranovel.PNG',
        tags: ['NextJS', 'Bootstrap'],
    },
    {
        name: 'React Template',
        category: ['React'],
        deployed_url: 'https://template-react.barlydjaja.com',
        description: 'This is a generic React Template.I build this from scratch using webpack, babel, SCSS, ESlint, and Typescript',
        github_url: 'https://github.com/barlydjaja/QUIZ-APP',
        image_path: 'react-template.PNG',
        tags: ['ReactJs', 'SCSS','ESLint', 'TypeScript'],
    },
    {
        name: 'Profiles Rest API',
        category: ['Python', 'Database'],
        deployed_url: 'https://github.com/barlydjaja/profiles-rest-api',
        description: 'This is a generic Quiz App. The difference tho, I build this from scratch using webpack, babel, and typescript',
        github_url: 'https://github.com/barlydjaja/profiles-rest-api',
        image_path: 'profile-app.PNG',
        tags: ['Django', 'django-rest-framework', 'PostgreSql'],
    }
]
