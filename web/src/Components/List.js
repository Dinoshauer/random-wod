import React from 'react';

import ListItem from './ListItem';

const List = ({ items }) => (
  <div className='row'>
    <ul className='list-group'>
      {items.map(
        (item, index) => (
          <ListItem key={ index }>{ item }</ListItem>
        )
      )}
    </ul>
  </div>
);

List.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.string)
};

export default List;
