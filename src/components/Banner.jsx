import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Banner = () => {
    return (
        <section id="home" className="min-h-screen bg-base-100 flex flex-col justify-center items-center text-center p-6 rounded-lg"
        style={{ backgroundImage: "url('https://images7.alphacoders.com/983/983491.png')" }}>
        <img
            src="https://i.ibb.co.com/kskC2SnV/Profile-pic1.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-primary"
        />
        <h1 className="text-4xl font-bold text-white">Hello! I'm <span className='text-[#739cc1]'>Sabrina</span><br/>
        MERN Stack Developer</h1>
        <p className="text-[#739cc1] mt-2">Building responsive websites & AI-powered solutions.</p>
        <a href="/resume.pdf" download>
            <a href='https://drive.google.com/file/d/1pytDvRLJGA37Q5CpsjY3FjbYzO2vGxLy/view?usp=sharing' target='_blank' className="btn btn-primary mt-4">Download Resume</a>
        </a>
        <div className="flex gap-4 mt-6 text-2xl">
            <a href="https://github.com/sabrh" target='_blank' className='text-white'><FaGithub size={35} /></a>
            <a href="https://www.linkedin.com/in/sabrina-haque-07453b252/" target='_blank' className='text-white'><FaLinkedin size={35} /></a>
            
        </div>
        </section>
    );
};

export default Banner;