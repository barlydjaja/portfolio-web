import React from 'react';
import {services} from "../assets/json/data";
import ServiceCard from "../components/ServiceCard";

const index = () => {
    return (
        <div className={'flex flex-col px-6 pt-1 flex-grow'}>
            <h5 className={'my-3 font-medium'}>
                I&apos;m a FullStack Developer. I have been working for more than 2 years now in Frontend
                development. I&apos;m using ReactJs and VueJs on daily basis at work. This website is created to show
                people my personal portfolio. I hope you can enjoy it!
            </h5>
            <div className={'p-4 mt-5 bg-gray-400 flex-grow dark:bg-zinc-800'} style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
                <h6 className={'my-3 font-bold text-xl tracking-wide'}>
                    What I Offer
                </h6>
                <div className={'grid lg:grid-cols-2 gap-6'}>
                    {
                        services.map((service) =>
                            <div key={service.title} className={'lg:col-span-1 bg-gray-200 rounded-lg dark:bg-slate-900'}>
                                <ServiceCard service={service}/>
                            </div>
                        )
                    }
                </div>
            </div>
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

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//     const res = await fetch(`${process.env["API_URL"]}/services`)
//     const data = await res.json()
//
//     return {
//         props: {
//             services: data.services
//         }
//     }
// }
