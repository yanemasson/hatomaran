import * as React from 'react';
import {useState} from "react";

interface ImageProps {
    src: string;
    alt: string | undefined;
    className?: string;
}

const Image = ({ src, alt, className }: ImageProps):React.JSX.Element => {
    const [isError, setIsError] = useState(false);

    return (
        <div>
            {!isError ? (
                <img
                    src={src}
                    alt={alt}
                    className={className}
                    onError={(e) => {
                        console.error('Image load error:', {
                            src,
                            alt,
                            target: e.target,
                        });
                        setIsError(true);
                    }}
                />
            ) : (
                <div className="error-placeholder">
                    Image failed to load: {alt}
                </div>
            )}
        </div>
    );
};

export default Image;
