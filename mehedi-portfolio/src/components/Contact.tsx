import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
                <p className="text-center mb-4">Feel free to reach out through any of the platforms below:</p>
                <div className="flex flex-col items-center">
                    <a href="mailto:mehedi@example.com" className="text-blue-500 hover:underline mb-2">Email: mehedi@example.com</a>
                    <a href="https://www.linkedin.com/in/mehedi-hasan" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-2">LinkedIn</a>
                    <a href="https://github.com/mehedi-hasan" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mb-2">GitHub</a>
                    <a href="https://www.kaggle.com/mehedi-hasan" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Kaggle</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;