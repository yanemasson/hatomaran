import {useState} from 'react';

interface BurgerButtonProps {
    onClick?: () => void;
}

const BurgerButton = ({onClick}: BurgerButtonProps)  => {
    const SpanClassName = ' block w-8 h-[3px] rounded bg-black transition-all duration-300 ease-out'
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
        if (onClick) {
            onClick()
        }
    }

    return (
        <button onClick={handleClick} className='flex flex-col gap-1.5 justify-center items-center w-10 h-10'>
            <span className={`${SpanClassName} ${isOpen && 'rotate-45 translate-y-2'}`}/>
            <span className={`${SpanClassName} ${isOpen && 'opacity-0'}`}/>
            <span className={`${SpanClassName} ${isOpen && '-rotate-45 -translate-y-2'}`}/>
        </button>
    );
};

export default BurgerButton;