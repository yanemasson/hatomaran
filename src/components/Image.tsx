import * as React from 'react';

interface ImageProps {
    src: string;
    alt: string | undefined;
    isHref?: boolean;
    className?: string;
}

const Image = ({ src, alt, isHref = false, className }: ImageProps):React.JSX.Element => {
    if(isHref)
        return <a target='_blank' href={src}><img src={src} alt={alt} className={className}/></a>
    return <img src={src} alt={alt} className={className}/>
};

export default Image;
