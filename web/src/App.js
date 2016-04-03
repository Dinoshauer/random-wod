import React from 'react';

import List from './Components/List';
import Input from './Components/Input';
import Tables from './Utils/tables';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      output: []
    };
  }

  update (e) {
    const val = e.target.value;
    this.setState({
      output: val.split('').map(c => Tables.names[c.charAt(c.length - 1)])
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
