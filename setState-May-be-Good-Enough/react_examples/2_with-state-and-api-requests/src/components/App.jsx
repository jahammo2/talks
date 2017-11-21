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

function reducer(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload.name
      };
    case 'GET_ALL_PROJECTS':
      return {
        ...state,
        projects: action.payload.projects,
        featuredProject: action.payload.featuredProject
      };
    case 'UPDATE_FEATURED_PROJECT':
      return {
        ...state,
        featuredProject: action.payload.featuredProject
      };
    default:
      return state;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    const initialState = {
      featuredProject: { attributes: {} },
      name: this.props.name,
      projects: []
    };

    this.state = reducer(initialState, {});
  }

  componentWillMount() {
    return projectsService.getAll()
      .then((projects) => {
        const action = {
          type: 'GET_ALL_PROJECTS',
          payload: {
            featuredProject: projects[0],
            projects
          }
        };

        return this.dispatch(action);
      });
  }

  dispatch(action) {
    return this.setState((previousState) => reducer(previousState, action));
  }

  changeName(name) {
    const action = {
      type: 'CHANGE_NAME',
      payload: { name }
    };

    return this.dispatch(action);
  }

  updateFeaturedProject(featuredProject) {
    const action = {
      type: 'UPDATE_FEATURED_PROJECT',
      payload: { featuredProject }
    };

    return this.dispatch(action);
  }

  render() {
    return (
      <div>
        <Greeting name={this.state.name} />
        <NameTaker name={this.state.name} onSubmit={this.changeName.bind(this)} />
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
