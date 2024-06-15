import React from 'react';

export default function About() {
    return (
        <section
            className="h-auto sm:h-screen bg-white dark:bg-gray-900"
            id="about"
        >
            <div className="sm:h-[15%] h-auto flex justify-center items-end">
                <p className="text-black font-semibold text-4xl dark:text-white mt-10 sm:mt-0">
                    About Me
                </p>
            </div>
        </section>
    );
}
