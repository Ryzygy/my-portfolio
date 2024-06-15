import React, { useMemo } from 'react';
import { ReactTyped } from 'react-typed';
import Person from '../assets/images/person.svg';
import Facebook from '../assets/images/icons/facebook.png';
import Github from '../assets/images/icons/github.png';
import Linkedin from '../assets/images/icons/linkedin.png';
import Instagram from '../assets/images/icons/instagram.png';

export default function Home() {
    const socials = useMemo(
        () => [
            {
                name: 'github',
                link: 'https://github.com/Ryzygy',
                icon: Github,
            },
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/in/ryzygy',
                icon: Linkedin,
            },
            {
                name: 'facebook',
                link: 'https://www.facebook.com/ryzygy',
                icon: Facebook,
            },
            {
                name: 'instagram',
                link: 'https://instagram.com/arenesci',
                icon: Instagram,
            },
        ],
        []
    );

    return (
        <section
            className="h-screen sm:h-auto home:h-screen bg-bg-light dark:bg-bg-dark bg-cover bg-green-200 flex sm:items-center items-center justify-center sm:gap-0 home:gap-2 sm:flex-col home:flex-row"
            id="/"
        >
            <div className="h-auto sm:h-[433px] home:h-auto home:max-w-[40%] w-full home:px-0 px-5 flex flex-col justify-center sm:items-center items-start home:items-start">
                <div>
                    <p className="font-bold home:text-5xl sm:text-4xl text-3xl text-black dark:text-white sm:dark:text-white">
                        Hi, I am Riva
                    </p>
                </div>
                <div className="mt-1">
                    <ReactTyped
                        strings={[
                            'Software Engineer',
                            '.NET Developer',
                            'Outsystems Developer',
                        ]}
                        typeSpeed={50}
                        backSpeed={60}
                        loop
                        className="font-bold home:text-5xl sm:text-4xl text-3xl text-[#3B82F6] text-start sm:text-center home:text-start"
                    />
                </div>
                <div className="mt-8 flex gap-4 h-11 sm:h-[3.2rem] justify-start sm:justify-center home:justify-start w-[100%] sm:dark:text-white home:dark:text-black">
                    {socials.map((social) => (
                        <div
                            className="w-full h-full max-w-14"
                            key={social.name}
                        >
                            <a
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={social.icon}
                                    alt="Instagram"
                                    className="w-full h-full max-w-[50px] max-h-[50px] hover:scale-[1.18] "
                                />
                            </a>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex w-full justify-start sm:justify-center home:justify-start">
                    <a
                        href="/resume.pdf"
                        download
                        type="button"
                        className=" home:w-[80%] w-[50%] max-w-56 h-[60px] text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base text-center pt-5 focus:outline-none"
                    >
                        Resume
                    </a>
                </div>
            </div>
            <div className="sm:h-[433px] home:h-[100%] home:w-[40%] w-full justify-center items-start hidden sm:flex">
                <img
                    src={Person}
                    alt="placeholder"
                    className="w-full h-full max-h-full -mt-36  home:-mt-20"
                />
            </div>
        </section>
    );
}
