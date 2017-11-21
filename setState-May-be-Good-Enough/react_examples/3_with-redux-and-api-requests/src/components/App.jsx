import React, { Component, PropTypes } from 'react';

import FeaturedProject from './FeaturedProject';
import Greeting from './Greeting';
import NameTaker from './NameTaker';
import Projects from './Projects';

import projectsService from '../services/projects';

const propTypes = {
  name: PropTypes.string.isRequired,
  projects: PropTypes.array
};

function reducer(state = {}, action) {
  switch (action.type) {
  case 'CHANGE_NAME':
    // state.name = action.payload.name;
    // return state;
    //
    // let newState = Object.assign({}, state);
    // newState.name = action.payload.name;
    // return newState;
    //
    return {
      ...state,
      name: action.payload.name
    };
  case 'FETCH_ALL_PROJECTS':
    return {
      ...state,
      featuredProject: action.payload.featuredProject,
      projects: action.payload.projects
    };
  case 'UPDATE_FEATURED_PROJECT':
    return {
      ...state,
      featuredProject: action.payload.featuredProject
    };
  default:
    return state;
  }
};

// function createStore(reducer) {
//   let listeners = [];
//   // Here is where data would need to persist
//   let state;
//
//   const store = {
//     dispatch: (action) => {
//       state = reducer(state, action);
//       listeners.forEach(listener => listener());
//     },
//     getState: () => state,
//     subscribe: (listener) => {
//       listeners.push(listener);
//     }
//   };
//
//   store.dispatch({});
//
//   return store;
// }

class App extends Component {
  constructor(props) {
    super(props);

    const initialState = {
      featuredProject: { attributes: {} },
      name: props.name,
      projects: []
    };

    this.state = reducer(initialState, {});
  }

  componentWillMount() {
    return projectsService.getAll()
      .then((projects) => {
        return this.dispatch({
          type: 'FETCH_ALL_PROJECTS',
          payload: {
            featuredProject: projects[0],
            projects
          }
        });
      });
  }

  dispatch(action) {
    return this.setState((previousState) => reducer(previousState, action));
  }

  changeName(name) {
    return this.dispatch({ type: 'CHANGE_NAME', payload: { name } });
  }

  updateFeaturedProject(featuredProject) {
    return this.dispatch({ type: 'UPDATE_FEATURED_PROJECT', payload: { featuredProject } });
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
