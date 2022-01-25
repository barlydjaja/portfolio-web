import React, {FunctionComponent, useState} from 'react';
import {IProject} from "../type/type";
import Image from "next/image";
import {AiFillGithub, AiFillProject} from "react-icons/ai";
import {MdClose} from "react-icons/md";

const ProjectCard: FunctionComponent<IProject> = ({
                                                      name,
                                                      category,
                                                      deployed_url,
                                                      github_url,
                                                      description,
                                                      image_path,
                                                      tags
                                                  }) => {
    const [showDetail, setShowDetail] = useState(false)
    const renderImg = (projectName: string) => {
        return require(`../assets/img/projects/${projectName}`)
    }
    return (
        <div>
            <Image src={renderImg(image_path)} alt={'project-image'}
                   className={'cursor-pointer rounded-md'} onClick={() => setShowDetail(true)}/>
            <p className={'my-2 text-center'}>{name}</p>

            {
                showDetail &&
                <div
                    className={'grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full ' +
                    'gap-x-12 text-black bg-gray-100 dark:text-white dark:bg-dark p-2'}>
                    <div>
                        <Image src={require(`../assets/img/projects/${image_path}`)} alt={'project-image'}
                               className={'rounded-md'}/>
                        <div className={'flex justify-center my-4 space-x-3'}>
                            <a href={github_url}
                               className={'flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-400'}>
                                <AiFillGithub/><span>Github</span>
                            </a>
                            <a href={deployed_url}
                               className={'flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-400'}>
                                <AiFillProject/><span>Project</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h2 className={'mb-3 text-xl font-medium md:text-2xl'}>{name}</h2>
                        <h3 className={'mb-3 font-medium'}>{description}</h3>
                        <div className={'flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'}>
                            {
                                tags.map(tag => <span key={tag}
                                                      className={'px-2 py-1 my-1 bg-gray-200 dark:bg-dark-400 rounded-sm'}>{tag}</span>)
                            }
                        </div>
                    </div>
                    <button onClick={() => setShowDetail(false)}
                            className={'absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-400'}>
                        <MdClose size={30}/>
                    </button>
                </div>
            }
        </div>
    );
};

export default ProjectCard;
