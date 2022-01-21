import React from 'react';
import {services} from "../assets/json/data";

const MyComponent = () => {
    console.log(services)
    return (
        <div className={'p-4'}>
            <h1>hello world</h1>
        </div>
    );
};

export default MyComponent;
