import React from 'react';
import python from '../assets/tech/python.png';
import javascript from '../assets/tech/js.png';
import cplusplus from '../assets/tech/c++.png';
import html from '../assets/tech/html.png';
import reactjs from '../assets/tech/reactjs.png';
import css from '../assets/tech/css.png';
import tailwind from '../assets/tech/tailwind.svg';
import nextjs from '../assets/tech/nextjs.png';
import bootstrap from '../assets/tech/bootstrap.png';
import nodejs from '../assets/tech/node-js.png';
import expressjs from '../assets/tech/expressjs.png';
import mongodb from '../assets/tech/mongodb.png';
import mysql from '../assets/tech/mysql.png';
import firebase from '../assets/tech/firebase.png';
import git from '../assets/tech/git.png';

const Skills = () => {

    return (
        <section id="skills" className="" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Skills</h2>
            <div>
                <p className='text-[#739cc1]'>Skilled in full-stack web development using JavaScript (ES6+), React.js,
                     Next.js, Node.js, and Express.js, with experience in MongoDB, MySQL, and 
                     Firebase Authentication. Proficient in building responsive UIs with HTML5, 
                     CSS3, Tailwind CSS, DaisyUI, and Bootstrap. Strong background in Python 
                     development, including PDF data extraction, NLP projects, and chatbot 
                     creation with RASA. Adept at using Git, GitHub, Postman, and Figma for 
                     efficient development and collaboration.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div>
                <h2 className='font-bold text-[#739cc1] mb-4'>Programming Languages</h2>
                <div className='flex gap-4'>
                    <img src={python} alt='python' className='w-15' />
                    <img src={cplusplus} alt='c++' className='w-15' />
                    <img src={javascript} alt='javascript' className='w-15' />
                </div>
            </div>
            <div>
                <h2 className='font-bold text-[#739cc1] mb-4'>Frontend</h2>
                <div className='flex gap-4'>
                    <img src={html} alt='html' className='w-15' />
                    <img src={css} alt='css' className='w-15' />
                    <img src={tailwind} alt='tailwind' className='w-15' />
                    <img src={reactjs} alt='react js' className='w-15' />
                    <img src={nextjs} alt='next js' className='w-15 bg-white rounded-full' />
                    <img src={bootstrap} alt='bootstrap' className='w-15' />
                </div>
            </div>
            <div>
                <h2 className='font-bold text-[#739cc1] mb-4'>Backend</h2>
                <div className='flex gap-4'>
                    <img src={nodejs} alt='node js' className='w-15' />
                    <img src={expressjs} alt='express js' className='w-15 bg-white rounded-full' />
                    <img src={mongodb} alt='mongo db' className='w-15' />
                    <img src={mysql} alt='my sql' className='w-15' />
                    <img src={firebase} alt='firebase' className='w-15' />
                </div>
            </div>
            <div>
                <h2 className='font-bold text-[#739cc1] mb-4'>Tools and Tech</h2>
                <div className='flex gap-4'>
                    <img src={git} alt='git' className='w-15' />
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Skills;