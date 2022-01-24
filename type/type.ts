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
