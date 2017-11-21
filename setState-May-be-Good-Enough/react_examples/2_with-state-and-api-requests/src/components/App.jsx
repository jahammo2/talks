import React, { Component, PropTypes } from 'react';

import projectsService from '../services/projects';

import FeaturedProject from './FeaturedProject';
import Greeting from './Greeting';
import NameTaker from './NameTaker';
import Projects from './Projects';

const propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  projects: PropTypes.array
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredProject: { attributes: {} },
      name: this.props.name,
      projects: []
    };
  }

  componentWillMount() {
    return projectsService.getAll()
      .then((projects) => {
        return this.setState({
          featuredProject: projects[0],
          projects
        });
      });
  }

  onSubmit(name) {
    return this.setState({ name });
  }

  updateFeaturedProject(featuredProject) {
    return this.setState({ featuredProject });
  }

  render() {
    return (
      <div>
        <Greeting name={this.state.name} />
        <NameTaker name={this.state.name} onSubmit={this.onSubmit.bind(this)} />
        <div className="c-projects-container">
          <Projects
            featuredProject={this.state.featuredProject}
            projects={this.state.projects}
            updateFeaturedProject={this.updateFeaturedProject.bind(this)}
          />
          <FeaturedProject project={this.state.featuredProject} />
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
