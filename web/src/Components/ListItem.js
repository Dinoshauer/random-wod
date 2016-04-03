import React from 'react';

const ListItem = ({ item }) => (
  <li className='list-group-item'>
    { item.amount }
    {' '}
    { item.name }
  </li>
);

ListItem.propTypes = {
  item: React.PropTypes.object
};

export default ListItem;
