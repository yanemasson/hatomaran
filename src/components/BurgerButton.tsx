import {useState} from 'react';

interface BurgerButtonProps {
    onClick?: () => void;
}

const BurgerButton = ({onClick}: BurgerButtonProps)  => {
    const SpanClassName = ' block w-[36px] h-[3px] rounded bg-black transition-all duration-300 ease-out'
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
        if (onClick) {
            onClick()
        }
    }

    return (
        <button onClick={handleClick} className={`flex flex-col justify-center items-center h-10 ${!isOpen && 'gap-1.5'}`}>
            <span className={`${SpanClassName} ${isOpen && 'rotate-45 translate-y-[3px]'}`}/>
            <span className={`${SpanClassName} ${isOpen && 'opacity-0'}`}/>
            <span className={`${SpanClassName} ${isOpen && '-rotate-45 -translate-y-[3px]'}`}/>
        </button>
    );
};

export default BurgerButton;