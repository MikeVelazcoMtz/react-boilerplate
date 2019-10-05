/**
*
* LinkList
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';

import styles from './styles.css';

function LinkList({ links, topicName }) {
  const linkNodes = links.map((item) => (
    <Link
      key={item.id}
      link={item}
    />
  ));

  return (
    <div className={styles.linkList}>
      <h1>
        {topicName}
      </h1>
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
  topicName: PropTypes.string.isRequired,
};

export default LinkList;
