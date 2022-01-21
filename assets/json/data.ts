import {RiComputerLine} from "react-icons/ri";
import {FaServer} from "react-icons/fa";
import {AiOutlineApi} from "react-icons/ai";
import { IServices } from "../../type/type";

export const services:IServices[] = [
    {
        title: 'Frontend Developer',
        about: 'I specialized in the Frontend area. Have been working in the frontend development for more than 2 years now. React and vue is my daily bread :)',
        icon: RiComputerLine,
    },
    {
        title: 'Backend Developer',
        about: 'I have been learning Backend Development for more than 6 months now. I mainly uses Golang or Python for server logic and API.',
        icon: FaServer,
    },
    {
        title: 'Dev Ops',
        about: 'For Versioning, I have always used git. For Deployment, most of the time I will be using services from AWS (amplify, ec2, route53, beanstalk, etc)',
        icon: AiOutlineApi
    }
]