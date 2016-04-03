import React from 'react';

const Input = ({ onChange }) => (
  <div className='row'>
    <form>
      <div className='form-group'>
        <input
          autoFocus
          type='text'
          placeholder='Enter your name!'
          className='form-control'
          onChange={ onChange } />
      </div>
    </form>
  </div>
);

Input.propTypes = {
  onChange: React.PropTypes.func
};

export default Input;
