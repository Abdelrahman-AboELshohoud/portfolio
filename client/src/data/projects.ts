import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management and secure payment processing.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative task management system with real-time updates and team collaboration features.",
    technologies: ["React", "Redux", "Express", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1280",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered content generation tool using advanced NLP models.",
    technologies: ["React", "Python", "TensorFlow", "FastAPI"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1280",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];