import {useEffect, useState} from "react";
import Image from "./Image.tsx";
import { ReactComponent as LeftArrow } from "@/assets/icons/arrow_left.svg";
import { ReactComponent as RightArrow } from "@/assets/icons/arrow_right.svg";
import {useProjects} from "../hooks/useProjects.ts";
import ProjectCard from "./ProjectCard.tsx";
import {useMediaBreakpoint} from "../hooks/useMediaBreakpoint.ts";
import {Tag} from "../types/types.ts";

export const ProjectList = (tag: Tag) => {
    const lg = useMediaBreakpoint('lg')
    const [isOpen, setIsOpen] = useState(false)
    const [currentProjectNumber, setCurrentProjectNumber] = useState(0)
    const projects = useProjects().filter((item) => item.tag?.value === tag.value);

    const goBack = () => {
        if(currentProjectNumber === 0) {
            setCurrentProjectNumber(projects.length - 1)
        } else {
            setCurrentProjectNumber(currentProjectNumber - 1)
        }
    }
    const goNext = () => {
        if(currentProjectNumber === projects.length - 1) {
            setCurrentProjectNumber(0)
        } else {
            setCurrentProjectNumber(currentProjectNumber + 1)
        }
    }
    const toggle = (num : number) => {
        setCurrentProjectNumber(num)
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleKey = (event : KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                toggle(0);
            }
            if (event.key === 'ArrowRight') {
                goNext()
            }
            if (event.key === 'ArrowLeft') {
                goBack()
            }
        };
        document.addEventListener('keydown', handleKey);

        return () => {
            document.removeEventListener('keydown', handleKey);
        };
    }, [toggle, goBack, goNext]);

    return (
        <div className="columns-3 gap-4 mt-20 ">
            {isOpen &&
                <>
                    <div className="fixed inset-0 bg-black/50 transition-opacity z-30" onClick={() => toggle(0)}/>
                    <div className="fixed inset-0 z-40 flex items-center justify-center pointer-events-none" >
                        <div className='flex items-center pointer-events-auto'>
                            {lg ? ( <>
                                        <LeftArrow className='text-gray-400 hover:text-white mr-5 z-50 items-center justify-center w-16' onClick={() => goBack()}/>
                                        <RightArrow className='text-gray-400 hover:text-white ml-5 z-50 items-center justify-center w-16' onClick={() => goNext()}/>
                                    </>
                        ) : ( <>
                                    <ProjectCard animations={projects[currentProjectNumber].animations} tag={projects[currentProjectNumber].tag} title={projects[currentProjectNumber].title} images={projects[currentProjectNumber].images} isOpen={projects[currentProjectNumber].isOpen}/>
                                    <div className='flex -mt-16 gap-52'>
                                        <LeftArrow className=' z-50 items-center justify-center w-10' onClick={() => goBack()}/>
                                        <RightArrow className=' z-50 items-center justify-center w-10' onClick={() => goNext()}/>
                                    </div>
                                </>

                        )}
                        </div>
                    </div>
                    </>
                }
                <div className="grid-item row-span-2">
                    {projects.map((item, index) => (
                        <div key={item.title} onClick={() => toggle(index)}><Image alt={item.title} className='py-2 '  src={item.images[0].url} /></div>))
                }
                </div>
            </div>
        )
    }

export default ProjectList;