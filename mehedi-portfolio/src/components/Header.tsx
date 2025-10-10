import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white fixed w-full z-10">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Md. Mehedi Hasan</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#hero" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-400">About</a></li>
                        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                        <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
                        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;