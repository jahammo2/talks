import React, { PropTypes } from 'react';

const propTypes = {
  project: PropTypes.object
};

function FeaturedProject({ project }) {
  return (
    <div className="c-featured-project">
      <h3>Featured Project</h3>
      <div>Name: {project.attributes.title}</div>
      <div>Description: {project.attributes.description}</div>
      <div>Date Deployed: {project.attributes.date_deployed}</div>
    </div>
  );
}

FeaturedProject.propTypes = propTypes;

export default FeaturedProject;
