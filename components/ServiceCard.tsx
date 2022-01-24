import React, {FunctionComponent} from 'react';
import {IServices} from "../type/type";

const ServiceCard:FunctionComponent<{service:IServices}> = ({service:{Icon, title, about}}) => {

    const createMarkup = () => {
        return {
            __html: about
        }
    }
    return (
        <div className={'p-2 flex items-center space-x-4'}>
            <Icon className={'w-24 h-24 text-green'}/>
            <div>
                <h4 className={'font-bold'}>{title}</h4>
                <p className={'text-sm'} dangerouslySetInnerHTML={createMarkup()}/>
            </div>

        </div>
    );
};

export default ServiceCard;
