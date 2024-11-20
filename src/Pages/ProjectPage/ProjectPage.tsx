import {useParams} from 'react-router-dom';
import {Text, TextVariant} from "../../components/Text.tsx";
import useProjects from "../../hooks/useProjects.ts";
import Image from "../../components/Image.tsx";

const ProjectPage = () => {
    const projects = useProjects()
    const { title } = useParams<string>();
    const project = projects.find(p => p.title === title);

    if(!project) {
        return <Text variant={TextVariant.H1}>404</Text>
    }

    return (
        <div className='flex gap-4 flex-col'>
            <div className=' mt-20 flex flex-col lg:flex-row gap-20'>
                <div className='flex lg:flex-col lg:w-1/2 gap-10'>
                    <div className='flex flex-col items-center'>
                        {project.images[0] && <>
                            <Image isHref={true} src={project.images[0].url} alt={project.images[0].url}/>
                            {project.images[0].title && <Text variant={TextVariant.P}>{project.images[0].title}</Text>}
                        </>}
                        {project.animations[0] && <>
                            <video autoPlay loop muted playsInline src={project.animations[0].url}/>
                            {project.animations[0].title && <Text variant={TextVariant.P}>{project.animations[0].title}</Text>}
                        </>}
                    </div>
                </div>
                <div className='flex flex-col gap-10 lg:w-1/2'>
                    <Text variant={TextVariant.H1}>{project.title}</Text>
                    <Text variant={TextVariant.P}>{project.description}</Text>
                </div>
            </div>
            <>
                {project.images[1] && <>
                    {project.images.slice(1).map((item) => (
                        <div className='py-4'>
                            <Image src={item.url} isHref={true} alt={item.url}/>
                            {item.title && <Text variant={TextVariant.P}>{item.title}</Text>}
                        </div>))}</>
                }
                {project.animations[1] && <>
                    {project.animations.slice(1).map((item) => (
                        <div className='py-4'>
                            <video className='lg:h-96' autoPlay loop muted playsInline src={item.url}/>
                            {item.title && <Text variant={TextVariant.P}>{item.title}</Text>}
                        </div>))}
                </>}
            </>
        </div>


    );
};

export default ProjectPage;