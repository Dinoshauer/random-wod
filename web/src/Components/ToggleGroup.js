import React from 'react';

import Toggle from './Toggle';

const ToggleGroup = ({ settings, onToggle }) => (
  <div className='row'>
    <div className='c-inputs-stacked'>
    </div>
  </div>
);

ToggleGroup.propTypes = {
  settings: React.PropTypes.object,
  onToggle: React.PropTypes.func
};

export default ToggleGroup;
