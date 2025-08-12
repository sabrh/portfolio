import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
        <Banner />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Contact />
        </>
    );
};

export default Home;