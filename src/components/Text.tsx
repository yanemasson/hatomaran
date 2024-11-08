import {ReactNode} from 'react';

export enum TextVariant {
    H1 = 'H1',
    H6 = 'H6',
    P = 'P',
}

type TextProps = {
    children: ReactNode;
    variant: TextVariant;
};

export const Text = ({children, variant}: TextProps) => {
    const variantStyle = variantStyleMap[variant];
    return <p className={`${variantStyle}`}>{children}</p>;
};

const variantStyleMap = {
    [TextVariant.H1]: 'text-[36px] font-bold tracking-[.2px]',
    [TextVariant.H6]: 'text-[18px] font-bold tracking-[.2px]',
    [TextVariant.P]: 'text-[18px] font-normal tracking-[.2px]',
};