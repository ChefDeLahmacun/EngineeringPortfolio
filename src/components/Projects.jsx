import { useState } from 'react';
import { projectsData } from '../data/projects';
import { HiExternalLink, HiChevronDown, HiChevronUp, HiX, HiDocumentText } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Show first 5 as featured, rest when "View All" is clicked
  const featuredProjects = projectsData.slice(0, 5);
  const displayProjects = showAll ? projectsData : featuredProjects;
  const hasMoreProjects = projectsData.length > 5;

  return (
    <section id="projects" className="section-padding px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          {showAll ? 'All Projects' : 'Featured Projects'}
        </h2>
        <p className="text-gray-600 mb-8">
          {showAll 
            ? `${projectsData.length} projects showcasing my work in embedded systems and electronics`
            : 'Highlights of my key projects and technical work. Click to learn more.'
          }
        </p>

        <div className="space-y-6">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    {project.category}
                  </span>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                      title="View Code"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                      title="Visit"
                    >
                      <HiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-primary-600 text-sm mt-3 font-medium">
                Click to learn more →
              </p>
            </div>
          ))}
        </div>

        {/* View All / Show Less Button */}
        {hasMoreProjects && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors"
            >
              {showAll ? (
                <>
                  Show Featured Only
                  <HiChevronUp size={20} />
                </>
              ) : (
                <>
                  View All Projects ({projectsData.length})
                  <HiChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedProject.title}
                </h3>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded">
                  {selectedProject.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <HiX size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h4>
                <div className="text-gray-600 leading-relaxed space-y-3">
                  {selectedProject.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-gray-50 text-gray-700 text-sm rounded border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(selectedProject.github || selectedProject.demo || selectedProject.pdf) && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <FaGithub size={18} />
                      View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <HiExternalLink size={18} />
                      Visit
                    </a>
                  )}
                  {selectedProject.pdf && (
                    <a
                      href={selectedProject.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <HiDocumentText size={18} />
                      View PDF
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
