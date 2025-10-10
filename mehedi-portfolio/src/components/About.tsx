import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
                <p className="text-lg text-center mb-4">
                    Md. Mehedi Hasan is an enthusiastic and goal-oriented undergraduate student pursuing a B.Sc. in Computer Science and Engineering at Dhaka International University.
                </p>
                <p className="text-lg text-center mb-4">
                    He has a strong foundation in programming, data analytics, machine learning, and database management, actively applying these skills to research and real-world projects.
                </p>
                <p className="text-lg text-center mb-4">
                    Passionate about leadership, public speaking, and contributing to tech communities, he has organized coding contests, workshops, and outreach initiatives in various leadership roles.
                </p>
                <p className="text-lg text-center mb-4">
                    His academic and research interests include intelligent systems, fraud detection, and continual learning, with several works accepted at international conferences.
                </p>
            </div>
        </section>
    );
};

export default About;