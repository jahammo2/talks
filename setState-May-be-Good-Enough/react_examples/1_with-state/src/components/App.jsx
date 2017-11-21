import React, { Component, PropTypes } from 'react';

import Greeting from './Greeting';
import NameTaker from './NameTaker';

const propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name
    }
  }

  onSubmit(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <Greeting name={this.state.name} />
        <NameTaker name={this.state.name} onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
