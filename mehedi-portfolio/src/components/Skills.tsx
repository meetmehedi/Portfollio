import React from 'react';

const Skills: React.FC = () => {
    const skills = [
        { name: 'Programming', level: 90 },
        { name: 'Data Analytics', level: 80 },
        { name: 'Machine Learning', level: 75 },
        { name: 'Database Management', level: 85 },
        { name: 'Public Speaking', level: 70 },
        { name: 'Leadership', level: 80 },
    ];

    return (
        <section id="skills" className="py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.name} className="bg-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold">{skill.name}</h3>
                            <div className="bg-gray-300 rounded-full h-4">
                                <div
                                    className="bg-blue-600 h-4 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <p className="text-right text-sm">{skill.level}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;