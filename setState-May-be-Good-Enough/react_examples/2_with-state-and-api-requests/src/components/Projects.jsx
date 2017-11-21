import React, { PropTypes } from 'react';

const propTypes = {
  featuredProject: PropTypes.object,
  projects: PropTypes.array,
  updateFeaturedProject: PropTypes.func
};

function Projects({ featuredProject, projects, updateFeaturedProject }) {
  return (
    <div>
      <h3>Projects</h3>
      <ol className="c-projects">
        {projects.map((project) => {
          let className = 'c-projects__item';

          if (project.id === featuredProject.id) {
            className += ' c-projects__item--active';
          }

          return (
            <li
              className={className}
              key={project.id}
              onClick={() => updateFeaturedProject(project)}
            >
              {project.attributes.title}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

Projects.propTypes = propTypes;

export default Projects;
