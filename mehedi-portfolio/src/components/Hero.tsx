import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Md. Mehedi Hasan</h1>
                <h2 className="text-3xl mt-4">B.Sc. in Computer Science and Engineering</h2>
                <p className="mt-2 text-lg">Enthusiastic about programming, data analytics, and machine learning.</p>
                <a href="#projects" className="mt-6 inline-block px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
                    View My Projects
                </a>
            </div>
        </section>
    );
};

export default Hero;