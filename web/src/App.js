import React from 'react';

import List from './Components/List';
import Input from './Components/Input';
import { getMovement } from './Utils/tables';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      output: []
    };
  }

  update (e) {
    this.setState({
      output: getMovement(e.target.value.toLowerCase())
    });
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <h1>Personal WOD</h1>
        </div>
        <Input onChange={ this.update.bind(this) } />
        <List items={ this.state.output } />
      </div>
    );
  }
}

export default App;
