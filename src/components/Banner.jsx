import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Banner = () => {
    return (
        <section id="home" className="min-h-screen bg-base-100 flex flex-col justify-center items-center text-center p-6"
        style={{ backgroundImage: "url('https://your-image-url.com/image.jpg')" }}>
        <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-primary"
        />
        <h1 className="text-4xl font-bold text-primary">MERN Stack Developer</h1>
        <p className="text-gray-600 mt-2">Building responsive websites & AI-powered solutions.</p>
        <a href="/resume.pdf" download>
            <button className="btn btn-primary mt-4">Download Resume</button>
        </a>
        <div className="flex gap-4 mt-6 text-2xl">
            <a href="https://github.com/sabrh" target='_blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sabrina-haque-07453b252/"><FaLinkedin /></a>
            
        </div>
        </section>
    );
};

export default Banner;