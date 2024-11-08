import {AnchorHTMLAttributes} from 'react';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    to?: string;
};

export const Anchor = ({children, to, ...props}: LinkProps) => {
    return (
            <a {...props} className='text-[18px] font-normal hover:underline ' target="_blank" rel="noopener noreferrer" href={to}>
                {children}
            </a>

    )
};
