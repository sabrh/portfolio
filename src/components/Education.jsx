import React from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Education = () => {
    return (
        <section id="education" className="py-20 " data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-primary">Education</h2>
            <div className="space-y-8">
            
            {/* Bachelor's Degree */}
            <div className="p-6 rounded-lg shadow-lg bg-[#425f7b]">
                <h3 className="text-xl font-semibold text-[#111b29]">
                Bachelor of Science in Computer Science & Engineering
                </h3>
                <a href='https://iub.ac.bd' target='_blank' className="text-white mt-1 flex items-center justify-center text-center">Independent University Bangladesh<FaArrowUpRightFromSquare /> | Bashundha R/A, Dhaka</a>
                <p className="text-[#739cc1] mt-1">Spring 2020 – Spring 2024</p>
                <p className="mt-3 text-white">
                Graduated with strong foundations in software development, algorithms, 
                and artificial intelligence, with multiple academic projects completed.
                </p>
            </div>

            {/* High School */}
            <div className="p-6 rounded-lg shadow-lg bg-[#425f7b]">
                <h3 className="text-xl font-semibold text-[#111b29]">
                Higher Secondary Certificate (HSC) – Science
                </h3>
                <a href='https://sagc.edu.bd' target='_blank' className="text-white mt-1 flex items-center justify-center text-center">Shaheed Bir Uttam Lt. Anwar Girls' College<FaArrowUpRightFromSquare /> | Dhaka Cantonment</a>
                <p className="text-[#739cc1] mt-1">January 2017 – April 2019</p>
                <p className="mt-3 text-white">
                Achieved excellent academic performance with a focus on mathematics, physics, and chemistry.
                </p>
            </div>

            </div>
        </div>
        </section>

    );
};

export default Education;