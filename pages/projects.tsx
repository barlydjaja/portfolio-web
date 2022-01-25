import React from 'react';
import {projects} from "../assets/json/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <div className={'px-5 py-2 overflow-y-auto'} style={{height: '60vh'}}>
            <nav>Navbar</nav>
            <div className={'grid grid-cols-12 gap-4 my-3 relative'}>
                {
                    projects.map(project => (
                        <div className={'col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-400 rounded-lg'}>
                            <ProjectCard {...project} key={project.name}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;
