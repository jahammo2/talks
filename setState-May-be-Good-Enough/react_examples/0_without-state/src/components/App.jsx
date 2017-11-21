import React, { Component } from 'react';

import Greeting from './Greeting';
import NameTaker from './NameTaker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { name: props.name };
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

export default App;
