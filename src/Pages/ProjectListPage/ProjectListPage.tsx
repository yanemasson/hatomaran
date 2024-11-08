import {projects} from "../../../public/ProjectData.ts";
import {useState} from "react";
import {Text, TextVariant} from "../../components/Text.tsx";
import {Link} from "react-router-dom";
import Image from "../../components/Image.tsx";
import { ReactComponent as LeftArrow } from "@/assets/icons/arrow_left.svg";
import { ReactComponent as RightArrow } from "@/assets/icons/arrow_right.svg";

const ProjectList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentProjectNumber, setCurrentProjectNumber] = useState(0)
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

    return (
        <div className="flex flex-col mt-20 lg:flex-row">
            {isOpen &&
                <>
                    <div className={` p-3 top-20 fixed z-40 bg-white left-2 right-2 lg:left-[27%] lg:top-3 lg:w-[46%]`}>
                        <LeftArrow className='fixed top-[40%] left-[18%]  items-center justify-center w-16' onClick={() => goBack()}/>
                        <div className='flex flex-col'>
                            <Image src={projects[currentProjectNumber].images[0].url} alt={projects[currentProjectNumber].images[0].description}/>
                            <Text variant={TextVariant.H6}>{projects[currentProjectNumber].title}</Text>
                            <Link to={`/project/${projects[currentProjectNumber].title}`}>Open full project...</Link>
                        </div>
                        <RightArrow className='fixed left-[78%] top-[40%] items-center justify-center w-16' onClick={() => goNext()}/>
                    </div>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-30"
                        onClick={() => toggle(0)}
                    />
                </>

            }
            {projects.map((item, index) => (
                <div key={item.title} onClick={() => toggle(index)}><Image alt={item.title} className='py-2 lg:h-96 lg:w-96 lg:p-2'  src={item.images[0].url} /></div>
            ))}
        </div>
    );
};

export default ProjectList;