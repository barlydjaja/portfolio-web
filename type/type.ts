import {IconType} from "react-icons";

export interface INavItem {
    state: string,
    setState: Function,
    name: string,
    route: string
}

export interface IServices {
    title: string
    about: string
    Icon: IconType
}

export interface ISkill {
    name: string
    level: string
    Icon: IconType
}

export interface IProject{
    name: string
    description: string
    image_path: string
    deployed_url: string
    github_url: string
    category: Category[]
    tags: string[]
}

export type Category = 'React' | 'Vue' | 'Go' | 'Python' | 'Database'
