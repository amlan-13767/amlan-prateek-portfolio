import { ChevronRight } from './icons';
import { icons } from './icons';

export default function OtherProjects({ projects }) {
  return <div className="other-projects">
    <h3>Other projects</h3>
    <div className="other-project-list">
      {projects.map((project) => {
        const Icon = icons[project.icon] || icons.Code2;
        return <article className={`other-project-row ${project.accent || 'violet'}`} key={project.slug}>
          <span className="other-project-icon"><Icon size={17} /></span>
          <div className="other-project-content">
            <div className="other-project-meta mono">{project.date || 'PROJECT'} · {project.type}</div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
          <div className="other-project-links">
            <a href={project.repo} target="_blank" rel="noreferrer">Code <ChevronRight size={14} /></a>
            {project.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <ChevronRight size={14} /></a>)}
          </div>
        </article>;
      })}
    </div>
  </div>;
}
