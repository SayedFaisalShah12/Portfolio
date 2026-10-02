import React from 'react';
import { Project } from '../types';
import { getSafeUrl } from '../config/site';
import { Github, ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const safeGithub = getSafeUrl(project.github);
  const safeDemo = getSafeUrl(project.demo);

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 ${
        project.featured
          ? 'bg-gradient-to-b from-[#0e172a] to-[#090d16] border border-cyan-500/30 hover:border-cyan-400/60 shadow-xl shadow-cyan-950/20 hover:shadow-cyan-500/10'
          : 'bg-[#0d1322] border border-slate-800 hover:border-slate-700 shadow-md'
      }`}
    >
      {/* Featured Accent Line */}
      {project.featured && (
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      )}

      <div>
        {/* Top bar: Category + Featured Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800/80 text-cyan-300 border border-slate-700/60">
            <FolderGit2 className="w-3 h-3 text-cyan-400" />
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
          {project.name}
        </h3>
        {project.tagline && (
          <p className="text-xs font-mono text-cyan-400/80 mt-1 mb-3">
            {project.tagline}
          </p>
        )}

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
        {safeGithub && (
          <a
            href={safeGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700/80 hover:border-cyan-500/40 transition-all"
            aria-label={`View ${project.name} on GitHub`}
          >
            <Github className="w-4 h-4 text-cyan-400" />
            GitHub Code
          </a>
        )}

        {safeDemo && (
          <a
            href={safeDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition-all"
            aria-label={`View ${project.name} live demo`}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};
