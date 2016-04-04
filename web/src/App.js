import React from 'react';

import List from './Components/List';
import Input from './Components/Input';
import Toggle from './Components/Toggle';
import { getMovement } from './Utils/tables';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      output: [],
      settings: {
        'cardio': false,
        'strength': false,
        'gymnastics': false
      }
    };
  }

  update (e) {
    this.setState({
      output: getMovement(e.target.value.toLowerCase(), this.state.settings)
    });
  }

  toggle (e) {
    const update = {};
    update[e.target.value] = !this.state.settings[e.target.value];
    this.setState(Object.assign(this.state.settings, update));
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <h1>Personal WOD</h1>
        </div>
        {
          Object.keys(this.state.settings).map((value, key) => (
            <Toggle
              key={ key }
              value={ value }
              checked={ this.state.settings[value] }
              onToggle={ this.toggle.bind(this) }
              />
          ))
        }
        <Input onChange={ this.update.bind(this) } />
        <List items={ this.state.output } />
      </div>
    );
  }
}

export default App;
