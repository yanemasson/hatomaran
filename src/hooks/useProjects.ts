import { useState, useEffect } from 'react';
import matter from 'gray-matter-browser';
import {Project} from "../types/types.ts";


export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    useEffect(() => {
        const loadProjects = async () => {
            const projectFiles = import.meta.glob('/content/projects/*.md', { as: 'raw' });
            const loadedProjects: Project[] = [];
            for (const path in projectFiles) {
                const fileContent = await projectFiles[path]();
                const { data} = matter(fileContent);
                const project: Project = {
                    title: data.title || 'Без названия',
                    description: data.description || '',
                    images: data.images || [],
                    animations: data.animations || [],
                    isOpen: data.isOpen || false,
                    tag: { value:data.tag || 'project' }
                }
                loadedProjects.push(project);
            }
            setProjects(loadedProjects)
        };

        loadProjects();
    }, []);

    return projects;
};

export default useProjects;
