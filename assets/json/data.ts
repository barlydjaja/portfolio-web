import {RiComputerLine} from "react-icons/ri";
import {FaServer} from "react-icons/fa";
import {AiOutlineApi, AiOutlineConsoleSql} from "react-icons/ai";
import {IServices, ISkill} from "../../type/type";
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
