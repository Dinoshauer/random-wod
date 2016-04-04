import React from 'react';

const Toggle = ({ value, checked, onToggle }) => (
  <div className='checkbox'>
    <label>
      <input
        type='checkbox'
        value={ value }
        checked={ checked }
        onChange={ onToggle }
        />{ value }
    </label>
  </div>
);

Toggle.propTypes = {
  key: React.PropTypes.string,
  checked: React.PropTypes.bool,
  onToggle: React.PropTypes.func
};

export default Toggle;
