import { useState } from 'react';
import { Github, ExternalLink, FolderOpen } from 'lucide-react';

interface Project {
  title: string;
  category: 'Web App' | 'Backend' | 'Academic';
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'NUS Management System',
    category: 'Web App',
    description:
      'A complete management system for the Napawala Undergraduate Society (NUS). Handles member registration, events, attendance, announcements, and admin dashboards. Built with a PHP/Laravel backend and responsive frontend.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/mohamadnawaf/nus-management-system',
  },
  {
    title: 'Library Management System',
    category: 'Backend',
    description:
      'A backend system for managing library books, members, borrowing, and returns. Includes role-based authentication, fine calculation, and reporting features.',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['PHP', 'MySQL', 'Laravel'],
    github: 'https://github.com/mohamadnawaf/library-system',
  },
  {
    title: 'Student Result Portal',
    category: 'Web App',
    description:
      'A web portal where students can check their exam results online. Admins can upload and manage results. Features secure login and search functionality.',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/mohamadnawaf/student-result-portal',
  },
  {
    title: 'Inventory Management System',
    category: 'Backend',
    description:
      'A C# desktop application for managing store inventory — products, suppliers, stock levels, and sales records. Uses a clean layered architecture.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['C#', '.NET', 'SQL Server'],
    github: 'https://github.com/mohamadnawaf/inventory-system',
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Web App',
    description:
      'A responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light mode, scroll animations, and a contact form.',
    image: 'https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/mohamadnawaf/portfolio',
    demo: '#home',
  },
  {
    title: 'E-commerce Demo Store',
    category: 'Academic',
    description:
      'An academic project demonstrating a basic e-commerce flow: product listing, cart, checkout simulation, and an admin panel. Built as a team project for coursework.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/mohamadnawaf/ecommerce-demo',
  },
];

const FILTERS = ['All', 'Web App', 'Backend', 'Academic'] as const;

interface ProjectsProps { dark: boolean; }

export default function Projects({ dark }: ProjectsProps) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const filtered =
    filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section
      id="projects"
      className={`py-20 sm:py-28 ${dark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className={`section-heading text-3xl sm:text-4xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`mt-4 text-base ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Some of the things I've built
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : dark
                  ? 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className={`project-card reveal overflow-hidden rounded-2xl border flex flex-col ${
                dark
                  ? 'bg-dark-700 border-gray-800 hover:border-primary-500/50'
                  : 'bg-white border-gray-100 hover:border-primary-500/50 shadow-sm hover:shadow-xl'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-3 left-3 tech-tag bg-primary-600/90 text-white backdrop-blur-sm">
                  {p.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <FolderOpen size={16} className="text-primary-500" />
                  <h3 className={`text-base font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    {p.title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed mb-4 flex-1 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className={`tech-tag ${dark ? 'bg-gray-700/60 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-dashed border-gray-200/20">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        dark ? 'text-gray-300 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'
                      }`}
                    >
                      <Github size={15} />
                      Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        dark ? 'text-gray-300 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'
                      }`}
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
