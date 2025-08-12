import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 " data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
            <p className="text-[#739cc1] leading-relaxed">
            I am a Computer Science and Engineering graduate with minor in Management Information Systems. I have 
            experience in web development, AI, and data science. My expertise includes MERN stack development 
            (MongoDB, Express.js, React.js, Node.js), Python programming, and machine learning. I have worked on 
            projects involving AI chatbots (Rasa, NLP, BERT), data analysis (Power BI, SQL), and resume parsing 
            (BERT, sentence-transformers, Streamlit) and also full stack website building.
            I am committed to continuous learning and like to explore other relevant fields. In my personal life, 
            I love watching anime, reading manga and horror/ thriller/ mystery shows/ movies and I've spent my 
            university days cafe hopping during breaks.
            </p>
        </div>
        </section>
    );
};

export default About;