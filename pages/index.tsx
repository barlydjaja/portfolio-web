import React from 'react';
import {GetServerSideProps, GetStaticPropsContext} from "next";

const index = ({services}) => {
    console.log("services", services)
    return (
        <div className={'p-4'}>
            <h1>hello world</h1>
        </div>
    );
};
export default index;

// export const getServerSideProps = (context: GetServerSideProps) => {
//     let data
//     fetch(`${process.env["API_URL"]}/services`)
//         .then(r => r.json())
//         .then(r => data = r)
//
//
//     return {
//         props: {
//             services: data.services
//         }
//     }
// }

export const getStaticProps = async(context: GetStaticPropsContext) => {
    const res = await fetch(`${process.env["API_URL"]}/services`)
    const data = await res.json()

    return {
        props: {
            services: data.services
        }
    }
}
