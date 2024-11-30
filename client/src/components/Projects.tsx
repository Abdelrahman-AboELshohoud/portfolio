import React from "react";
import { projects } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";
import { ProjectShapes } from "./shapes/Shapes";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative py-12 md:py-16 bg-gradient-to-br from-white to-blue-50 overflow-hidden"
    >
      <ProjectShapes />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-16">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r pb-4 from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/80 backdrop-blur-sm rounded-lg border border-indigo-50 overflow-hidden hover:border-indigo-100 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/70 to-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  )}
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
