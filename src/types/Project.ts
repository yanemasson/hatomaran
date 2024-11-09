import {Image} from "./Image.ts";

export interface Project {
    title: string
    isOpen?: boolean
    description?: string
    images: Image[];
}