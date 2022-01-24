import React, {FunctionComponent} from 'react';
import {ISkill} from "../type/type";

const Bar: FunctionComponent<ISkill> = ({name, Icon, level}) => {
    return (
        <div className={'text-white my-2 bg-gray-300 rounded-full'}>
            <div className={'px-4 py-1 h-4 flex items-center rounded-full bg-gradient-to-r from-green to-blue-400'}
                 style={{width: level}}>
                <Icon className={'mr-3 h-2 w-2'}/>
                <span className={'text-sm'}>{name}</span>
            </div>
        </div>
    );
};

export default Bar;
