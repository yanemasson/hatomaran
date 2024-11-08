import {ButtonHTMLAttributes} from 'react';
import {Text, TextVariant} from "./Text.tsx";

export enum StyleVariant {
    White = 'white',
    Blue = 'blue',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: StyleVariant;
};

export const Button = ({children, variant, ...props}: ButtonProps) => {
    const variantStyle = styleMap[variant];
    return (
        <button {...props} className={`border-2 max-w-60 rounded-full p-3 px-6 ${variantStyle}`}>
            <Text variant={TextVariant.H6}>{children}</Text>
        </button>
    );
};

const styleMap = {
    [StyleVariant.White]: ' bg-white border-black hover:bg-gray-100 ',
    [StyleVariant.Blue]: ' bg-[#2091F9] text-white',
};
