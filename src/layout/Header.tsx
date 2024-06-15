import React, { useState, useMemo } from 'react';
import Hamburger from 'hamburger-react';
import { useThemeSwitcher } from '../hook/useThemeSwitcher';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';

export default function Header() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [theme, setTheme] = useThemeSwitcher();

    const sections = useMemo(
        () => [
            {
                name: 'Home',
                id: '/',
            },
            {
                name: 'About',
                id: 'about',
            },
            {
                name: 'Skills',
                id: 'skills',
            },
            {
                name: 'Experiences',
                id: 'experiences',
            },
            {
                name: 'Projects',
                id: 'projects',
            },
            {
                name: 'Contact',
                id: 'contact',
            },
        ],
        []
    );

    const toggleDarkMode = () => {
        try {
            if (theme === 'light') {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        } catch (error) {
            console.log('Error switching theme');
        }
    };

    return (
        <React.Fragment>
            <nav className="bg-white dark:bg-gray-700 sticky w-full h-[70px] flex flex-row justify-between items-center nav:px-16 px-3 top-0 shadow-lg">
                <div className="h-full flex justify-center items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="sm:h-[70%] h-[60%] w-full"
                    />
                </div>
                <div className="nav:flex gap-4 mt-1 ">
                    <div className={`width-auto hidden nav:block w-full`}>
                        <ul className="flex nav:flex-row flex-col nav:gap-3 gap-1">
                            {sections.map((section) => (
                                <li
                                    key={section.name}
                                    className=" cursor-pointer "
                                >
                                    <Link
                                        to={section.id}
                                        activeClass={'text-white bg-blue-500'}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        className={
                                            'hover:text-white px-4 py-2 text-black hover:bg-blue-500 dark:text-white text-[15px] rounded-md'
                                        }
                                    >
                                        {section.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center nav:gap-2 gap-1">
                        <div
                            className={`dark text-[11%] nav:text-[12%] dark:border dark:border-white border border-black relative h-[16em] w-[30em] rounded-[16em] cursor-pointer bg-[#423966] ${
                                theme === 'light' ? 'day' : ''
                            }`}
                            onClick={toggleDarkMode}
                        >
                            <div
                                className={`moon absolute block rounded-[50%] top-[3em] left-[3em] w-[10em] h-[10em] bg-[#423966] ${
                                    theme === 'light' ? 'sun' : ''
                                }`}
                            ></div>
                        </div>
                        <div className="flex nav:hidden dark:text-white">
                            <Hamburger
                                toggled={isOpen}
                                toggle={setOpen}
                                duration={0.9}
                                size={22}
                            />
                        </div>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: 100 }}
                        animate={{ x: 0, transition: { type: 'spring' } }}
                        exit={{ x: 200, transition: { type: 'spring' } }}
                        className={
                            'bg-white nav:hidden dark:bg-gray-700 p-2 z-50 fixed top-[70px] mt-2 rounded-lg shadow-lg right-2 block w-40 h-auto'
                        }
                    >
                        <ul className="flex flex-col gap-2 text-md font-medium">
                            {sections.map((section) => (
                                <Link
                                    to={section.id}
                                    activeClass={'text-white bg-blue-500'}
                                    className={
                                        'text-black dark:text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:bg-blue-500 hover:text-white cursor-pointer'
                                    }
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    onClick={() => setOpen(false)}
                                >
                                    <li>{section.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
}
