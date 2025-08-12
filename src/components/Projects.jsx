import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Kids School",
      image: "https://via.placeholder.com/500x300",
      description:
        "A responsive school website showcasing courses, events, and admission details with a clean UI.",
      stack: ["HTML", "Tailwind", "DaisyUI"],
      live: "https://sabrh.github.io/Kids-School-B11A2/",
    },
    {
      id: 2,
      name: "Food Expiry Tracker",
      image: "https://via.placeholder.com/500x300",
      description:
        "Tracks food expiry dates and sends reminders to reduce waste. Built with a MERN stack.",
      stack: ["ReactJS", "Node", "MongoDB"],
      live: "https://expiry-tracker-sabrh.netlify.app/",
    },
    {
      id: 3,
      name: "Sports Club Management System",
      image: "https://via.placeholder.com/500x300",
      description:
        "Manages member registrations, events, and payments for a sports club with a secure backend.",
      stack: ["ReactJS", "Node", "MongoDB"],
      live: "https://sports-club-sabrh.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="pb-10" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-primary">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="hero bg-[#425f7b] rounded-lg shadow-lg p-6"
            >
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="lg:ml-8">
                  <h1 className="text-2xl font-bold text-[#111b29]">{project.name}</h1>
                  <p className="py-4 text-white">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="badge badge-neutral"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-primary">
                      View Live Project
                    </button>
                  </a>
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