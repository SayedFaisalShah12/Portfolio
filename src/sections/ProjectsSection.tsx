import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { FolderGit2, Sparkles, Layers } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const otherProjects = PROJECTS_DATA.filter((p) => !p.featured);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="projects" className="py-24 bg-[#090d16] relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured Projects & AI Demonstrations
          </h2>
          <p className="mt-3 text-slate-400 text-sm max-w-2xl">
            Practical AI agents, machine learning applications, deep learning classifiers, and intelligent software concepts.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 bg-[#0d1322] p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Projects ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                filter === 'featured'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Featured Flagships ({featuredProjects.length})
            </button>
            <button
              onClick={() => setFilter('agentic')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === 'agentic'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Agentic AI
            </button>
            <button
              onClick={() => setFilter('machine learning')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === 'machine learning'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Machine Learning
            </button>
          </div>
        </div>

        {/* Filtered Display Grid */}
        {filter !== 'all' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="space-y-16">
            {/* Featured Projects Grid */}
            <div>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-800">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-slate-100">Featured Flagship Projects</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>

            {/* More Projects Grid */}
            <div>
              <div className="flex items-center gap-2 mb-6 pb-2 border-b border-slate-800">
                <Layers className="w-5 h-5 text-slate-400" />
                <h3 className="text-xl font-bold text-slate-100">More ML & Vision Projects</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
