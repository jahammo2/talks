import React from 'react';

import Greeting from './Greeting';
import NameTaker from './NameTaker';

function App({ name }) {
  return (
    <div>
      <Greeting name={name} />
      <NameTaker name={name} />
    </div>
  );
}

export default App;
