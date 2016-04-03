import React from 'react';

const ListItem = ({ children }) => (
  <li className='list-group-item'>{ children }</li>
);

ListItem.propTypes = {
  children: React.PropTypes.node
};

export default ListItem;
