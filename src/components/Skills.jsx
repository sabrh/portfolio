import React from 'react';

const Skills = () => {
    const skills = {
    Frontend: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
    Backend: ["Node.js", "Express", "MongoDB"],
    Tools: ["Git", "GitHub", "Figma"]
    };

    return (
        <section id="skills" className="py-20 bg-base-100" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Skills</h2>
            <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="card bg-base-200 shadow-md p-4">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                    {items.map(skill => (
                    <li key={skill} className="badge badge-primary badge-outline">{skill}</li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Skills;