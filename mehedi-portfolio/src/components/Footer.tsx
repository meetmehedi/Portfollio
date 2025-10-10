import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Md. Mehedi Hasan. All rights reserved.</p>
                <div className="mt-2">
                    <a href="https://www.linkedin.com/in/mehedi-hasan" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
                    <a href="https://github.com/mehedi-hasan" className="text-gray-400 hover:text-white mx-2">GitHub</a>
                    <a href="https://www.kaggle.com/mehedihasan" className="text-gray-400 hover:text-white mx-2">Kaggle</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;