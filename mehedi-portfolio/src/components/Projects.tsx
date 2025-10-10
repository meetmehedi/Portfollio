import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of Project One.',
        link: 'https://github.com/username/project-one',
    },
    {
        title: 'Project Two',
        description: 'A brief description of Project Two.',
        link: 'https://github.com/username/project-two',
    },
    {
        title: 'Project Three',
        description: 'A brief description of Project Three.',
        link: 'https://github.com/username/project-three',
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-5">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;