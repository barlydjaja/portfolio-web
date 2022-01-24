import React from 'react';
import {frameworks, languages} from "../assets/json/data";
import Bar from "../components/Bar";

const resume = () => {
    return (
        <div className={'px-6 py-2'}>
            {/*education & experience*/}
            <div className={'grid gap-6 md:grid-cols-2'}>
                <div>
                    <h5 className={'my-3 text-2xl font-bold'}>Education</h5>
                    <div className={'mb-3'}>
                        <h5 className={'my-2 text-xl font-bold'}>Bachelor of Engineering</h5>
                        <p className={'font-semibold'}>Universitas Indonesia (2016-2020)</p>
                        <p className={'my-3'}>I graduated from Universtias Indonesia with an engineering degree and GPA of 3.44</p>
                    </div>
                    <div className={'mb-3'}>
                        <h5 className={'my-2 text-xl font-bold'}>Master of Computer Science</h5>
                        <p className={'font-semibold'}>BINUS University (2021-2022)</p>
                        <p className={'my-3'}>I will graduate from BINUS University with a master degree in computer science in 2022.</p>
                        <p className={'my-3'}>Current GPA: 3.7</p>
                    </div>
                </div>
                <div>
                    <h5 className={'my-3 text-2xl font-bold'}>Work Experience</h5>
                    <div className={'mb-3'}>
                        <h5 className={'my-2 text-xl font-bold'}>Frontend Developer</h5>
                        <p className={'font-semibold'}>Rupiah Cepat (Apr 2021 - now)</p>
                        <p className={'my-3'}>Maintaining our offical website, handle webview, create investment projects, etc. Using VueJs and NuxtJs</p>
                    </div>
                    <div className={'mb-3'}>
                        <h5 className={'my-2 text-xl font-bold'}>Web Developer</h5>
                        <p className={'font-semibold'}>PinjamanGo (Jan 2021 - Apr2022)</p>
                        <p className={'my-3'}>Handle Offical Website, add geolocation, create internal apps. Using VueJs</p>
                    </div>
                </div>
            </div>
            {/*languages & Framework*/}
            <div className={'grid gap-6 md:grid-cols-2'}>
                <div>
                    <h5 className={'my-3 text-2xl font-bold'}>Languages</h5>
                    <div className={'my-2'}>
                        {
                            languages.map(language => <Bar {...language} key={language.name}/>)
                        }
                    </div>
                </div>
                <div>
                    <h5 className={'my-3 text-2xl font-bold'}>Frameworks</h5>
                    <div className={'my-2'}>
                        {
                            frameworks.map(framework => <Bar {...framework} key={framework.name}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default resume;
