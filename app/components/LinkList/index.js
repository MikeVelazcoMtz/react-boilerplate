/**
*
* LinkList
*
*/

import React from 'react';
import PropTypes from 'prop-types';


import styles from './styles.css';

function LinkList({ links }) {
  const linkNodes = links.map((item) => (
    <div key={item.id}>
      {`${item.url} - ${item.description}`}
    </div>
  ));

  return (
    <div className={styles.linkList}>
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LinkList;
