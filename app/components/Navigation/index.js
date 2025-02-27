/**
*
* Navigation
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '../AppBar';
import Drawer from '../Drawer';

import styles from './styles.css';

export default function Navigation({ topics, selectTopic, toggleDrawer, isDrawerOpen }) {
  return (
    <div className={styles.navigation}>
      <AppBar
        toggleDrawer={toggleDrawer}
      />
      <Drawer
        items={topics}
        selectItem={selectTopic}
        itemLabel="name"
        itemKey="name"
        isDrawerOpen={isDrawerOpen}
      />
    </div>
  );
}

Navigation.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
    ).isRequired,
  selectTopic: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};
