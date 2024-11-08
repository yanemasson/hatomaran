import {projects} from "../../../public/ProjectData.ts";
import {useState} from "react";
import {Text, TextVariant} from "../../components/Text.tsx";
import {Link} from "react-router-dom";

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
                        <button className='fixed top-[40%] left-[18%]  items-center justify-center w-16' onClick={() => goBack()}>
                            <img alt='<' src='src/icons/arrow_left.svg'/>
                        </button>
                        <div className='flex flex-col'>
                            <img src={projects[currentProjectNumber].images[0].url} alt={projects[currentProjectNumber].images[0].description}/>
                            <Text variant={TextVariant.H6}>{projects[currentProjectNumber].title}</Text>
                            <Link to={`/project/${projects[currentProjectNumber].title}`}>Open full project...</Link>
                        </div>
                        <button className='fixed left-[78%] top-[40%] items-center justify-center w-16' onClick={() => goNext()}>
                            <img alt='>' src='src/icons/arrow_right.svg'/>
                        </button>
                    </div>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-30"
                        onClick={() => toggle(0)}
                    />
                </>

            }
            {projects.map((item, index) => (
                <img alt={item.title} className='py-2 lg:h-96 lg:w-96 lg:p-2' onClick={() => toggle(index)} src={item.images[0].url} key={item.title}/>
            ))}
        </div>
    );
};

export default ProjectList;