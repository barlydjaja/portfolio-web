import React, {FunctionComponent} from 'react';
import Link from "next/link";
import {INavItem} from "../../type/type";

const NavItem: FunctionComponent<INavItem> = ({state, setState, name, route}) => {
    return (
        state !== name &&
        <Link href={route}>
            <a>
                <span className={'hover:text-green'} onClick={() => setState(name)}>{name}</span>
            </a>
        </Link>
    );
};

export default NavItem;
