import * as React from 'react';
import {useParams} from 'react-router-dom';
import {projects} from '../../../public/ProjectData';
import {Text, TextVariant} from "../../components/Text.tsx";
import {Anchor} from "../../components/Anchor.tsx";


const ProjectPage = () => {
    const { title } = useParams<{ title}>();
    const project = projects.find(p => p.title === title);

    return (
        <div className="flex flex-col items-center mt-20">
            <div className='p-10 flex flex-col items-start gap-4'>
                <Text variant={TextVariant.H1}>{project.title}</Text>
                <Text variant={TextVariant.P}>{project.description}</Text>
            </div>
            <div className='flex flex-col lg:flex-row'>
                {project.images.map((item, index) => (<img className='w-96' src={item.url} alt={item.description} key={index}/>))}
            </div>
            <Anchor to={project.bechanceLink}>Bechance link</Anchor>
        </div>
    );
};

export default ProjectPage;