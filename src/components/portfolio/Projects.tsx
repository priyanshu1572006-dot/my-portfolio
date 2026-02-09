import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
  problem?: string;
  dataset?: string;
  insights?: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Placeholder projects - will be populated by user later
  const projects: Project[] = [];

  const categories = ['All', 'Power BI', 'SQL', 'Excel', 'Combined Tools'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="projects" className="py-32 px-6 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Explore my data analysis projects showcasing real-world problem-solving
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid or Placeholder */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                <ExternalLink className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Projects Coming Soon</h3>
              <p className="text-lg text-secondary max-w-md mx-auto">
                I'm currently curating my best data analysis projects to showcase here.
                Check back soon to see detailed case studies and insights.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-2">{project.title}</h3>
                      <p className="text-sm text-secondary line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-3 py-1 bg-muted rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-10 space-y-8">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h2 className="text-4xl font-bold mt-2 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-lg text-secondary">{selectedProject.description}</p>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden bg-muted border border-border">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {selectedProject.problem && (
                <div>
                  <h3 className="text-2xl font-bold mb-3">Problem Statement</h3>
                  <p className="text-secondary leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.dataset && (
                <div>
                  <h3 className="text-2xl font-bold mb-3">Dataset</h3>
                  <p className="text-secondary leading-relaxed">
                    {selectedProject.dataset}
                  </p>
                </div>
              )}

              {selectedProject.insights && selectedProject.insights.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold mb-3">Key Insights</h3>
                  <ul className="space-y-2">
                    {selectedProject.insights.map((insight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mt-1">
                          {index + 1}
                        </span>
                        <span className="text-secondary leading-relaxed">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
