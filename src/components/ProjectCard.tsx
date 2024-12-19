import Image from "./Image.tsx";
import {Project} from "../types/types.ts";
import {Text, TextVariant} from "./Text.tsx";
import {Link} from "react-router-dom";

const ProjectCard = ({images, animations, title, isOpen}:Project) => {
    return (
        <div className=' flex flex-col p-3 gap-3 rounded justify-center bg-white'>
            {images[0] && <Image className=' lg:h-[85vh]' src={`${images[0].url}?nf_resize=fit&w=800`} alt={images[0].url}/>}
            {animations[0] && <video className=' lg:h-[85vh]' autoPlay loop muted playsInline src={animations[0].url}/>}
            <Text variant={TextVariant.H6}>{title}</Text>
            {isOpen && <Link to={`/project/${title}`}>Open full project...</Link>}
        </div>
    );
};

export default ProjectCard;