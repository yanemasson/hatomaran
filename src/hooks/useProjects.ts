import { useState, useEffect } from 'react';
import matter from 'gray-matter-browser';
import {Project} from "../types/Project.ts";

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
                    behanceLink: data.behanceLink
                };
                loadedProjects.push(project);
            }
                setProjects(loadedProjects);
        };

        loadProjects();
    }, []);

    return { projects};
};

export default useProjects;
