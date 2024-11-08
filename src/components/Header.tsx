import {useState} from 'react';
import BurgerButton from "./BurgerButton.tsx";
import {useMediaBreakpoint} from "../hooks/useMediaBreakpoint.ts";
import {Text, TextVariant} from "./Text.tsx";
import {Link} from "react-router-dom";

const Header = () => {
    const lg = useMediaBreakpoint('lg')
    const [isOpen, setIsOpen] = useState(false)
    const menuItems = [
        { path: '/', label: 'Projects' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ]
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    if(lg) {
        return ( //desktop
            <nav className='bg-white h-20 w-full gap-20 flex justify-center items-center fixed left-0 top-0'>
                {menuItems.map((item) => (
                    <Link className='hover:underline' to={item.path}>
                        <Text variant={TextVariant.H6} key={item.path} >
                            {item.label}
                        </Text>
                    </Link>
                    ))}
            </nav>
        )
    }

    return ( //mobile
        <nav className='bg-white fixed top-0 left-0 w-full h-20 flex justify-center items-center'>
            <div className="fixed justify-center top-5 left-5 z-50">
                <BurgerButton onClick={toggleMenu} />
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-30"
                    onClick={toggleMenu}
                />
            )}
            <div
                className={`fixed top-0 left-0 h-full bg-white w-64 transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col text-2xl p-4 mt-16">
                    {menuItems.map((item) => (
                        <div className="p-3 w-28" onClick={toggleMenu} key={item.path} >
                            <Link to={item.path}>
                                <Text variant={TextVariant.H6} key={item.path} >
                                    {item.label}
                                </Text>
                            </Link>
                        </div>))}
                </div>
            </div>
        </nav>
    )
}

export default Header;