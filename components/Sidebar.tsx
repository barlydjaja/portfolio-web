import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import {GoLocation} from 'react-icons/go'

import {useTheme} from "next-themes";

import styles from '../styles/Sidebar.module.css'

const MyComponent = () => {
    const {theme, setTheme} = useTheme()

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div>
            <img
                src='https://media-exp1.licdn.com/dms/image/C5603AQHG-LusfwucIQ/profile-displayphoto-shrink_200_200/0/1606703098921?e=1648080000&v=beta&t=VTStf0f42eHZYQNJ4QbcSxHqd9DCgWOmc-HlgYefaJo'
                alt={'avatars'}
                loading={'lazy'}
                className={'w-32 h-32 rounded-full mx-auto'}
            />
            <h3 className={'my-4 text-3xl font-medium tracking-wider font-Oswald'}>
                <span className='text-green'>Barly </span>
                Djaja
            </h3>
            <p className={'px-2 py-1 my-3 bg-gray-200 rounded-full dark:text-slate-600'}>Full Stack Developer</p>
            {/*    social icon*/}
            <div className={'flex justify-around my-5 text-green w-9/12 md:w-full mx-auto'}>
                <a href={'https://www.linkedin.com/in/barly-djaja/'}>
                    <AiFillLinkedin className={'w-8 h-8 cursor-pointer'}/>
                </a>
                <a href={'https://github.com/barlydjaja'}>
                    <AiFillGithub className={'w-8 h-8 cursor-pointer'}/>
                </a>
                <a href={'https://www.youtube.com/channel/UC395w1gKC8j_p31hQynTBwg'}>
                    <AiFillYoutube className={'w-8 h-8 cursor-pointer'}/>
                </a>
            </div>
            {/*    address*/}
            <div className={'py-5 my-5 bg-gray-200'} style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className={'flex items-center justify-center space-x-2'}>
                    <GoLocation className={'dark:text-slate-600'}/>
                    <span className={'dark:text-slate-600'}>Jakarta, Indonesia</span>
                </div>
                <p className={'my-2 dark:text-slate-600'}>barlydjaja@gmail.com</p>
            </div>
            <button
                className='bg-gradient-to-r from-green to-blue-400 w-full rounded-full py-2 px-5 text-white my-2
                focus:outline-none'
                onClick={() => window.open('mailto:barlydjaja@gmail.com')}
            >
                Email Me
            </button>
            <div className={'flex justify-around items-center my-2'}>
                <label className={`${styles.switch}`} id={'theme-switch'}>
                    <input type="checkbox" onClick={changeTheme}/>
                    <span className={`${styles.slider} ${styles.round}`}/>
                </label>
                {theme === 'dark' && <span id={'theme-switch'} className={'text-white font-bold'}>Light Theme</span>}
                {theme === 'light' && <span id={'theme-switch'} className={'font-bold'}>Dark Theme</span>}
            </div>
        </div>
    );
};

export default MyComponent;

