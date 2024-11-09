export interface Image {
    url: string
    title?: string
}

export interface Tag {
    value: 'animation' | 'project' | null;
}

export interface Project {
    title: string
    isOpen?: boolean
    description?: string
    images: Image[];
    tag?: Tag
}
