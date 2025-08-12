import React from 'react';

const Projects = () => {
    const projects = [
    {
      id: 1,
      name: "Pet Shop Website",
      image: "https://via.placeholder.com/300",
      stack: ["HTML", "Tailwind", "DaisyUI"],
    },
    {
      id: 2,
      name: "AI Chatbot",
      image: "https://via.placeholder.com/300",
      stack: ["Python", "Rasa", "React"],
    },
    {
      id: 3,
      name: "Hospital Receptionist Bot",
      image: "https://via.placeholder.com/300",
      stack: ["Python", "Streamlit", "BERT"],
    },
  ];

    return (
        <section id="projects" className="py-20 bg-base-200" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="card bg-base-100 shadow-lg">
                <figure>
                    <img src={project.image} alt={project.name} />
                </figure>
                <div className="card-body">
                    <h3 className="card-title">{project.name}</h3>
                    <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <span key={tech} className="badge badge-primary badge-outline">{tech}</span>
                    ))}
                    </div>
                    
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Projects;