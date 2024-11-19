import { useState, useEffect } from 'react';
import matter from 'gray-matter-browser';

export interface PageContent {
    title?: string;
    description?: string;
    [key: string]: any;
}

export const usePages = (path: string) => {
    const [pageContent, setPageContent] = useState<PageContent>({});

    useEffect(() => {
        const loadPage = async () => {
            const pageFiles = import.meta.glob('/content/pages/*.md', { as: 'raw' });
            const fullPath = `/content/pages/${path}.md`;
            const loader = pageFiles[fullPath];
            if (!loader) {
                console.warn(`File not found: ${fullPath}`);
                return;
            }
            const fileContent = await loader();
            const { data } = matter(fileContent);
            setPageContent(data);
        }
        loadPage();
    }, [path]);

    return pageContent;
};

export default usePages;
