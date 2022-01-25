import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import {useRouter} from "next/router";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
    const [state, setState] = useState<string>('')

    const {pathname} = useRouter()

    useEffect(() => {
            if (pathname === '/') setState('About')
            if (pathname === '/projects') setState('Projects')
            if (pathname === '/resume') setState('Resume')
    }, [pathname])

    return (
        <div className={'flex justify-between px-5 py-3 my-3'}>
            <span className={'font-bold text-green text-xl border-b-4 border-green md:text-2xl'}>{state}</span>
            <div className={'text-lg flex space-x-5'}>
                <NavbarItem state={state} setState={setState} name={'About'} route={'/'}/>
                <NavbarItem state={state} setState={setState} name={'Projects'} route={'/projects'}/>
                <NavbarItem state={state} setState={setState} name={'Resume'} route={'/resume'}/>
            </div>
        </div>
    );
};

export default Navbar;
