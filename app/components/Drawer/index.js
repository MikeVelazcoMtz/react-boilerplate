/**
*
* Drawer
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './styles.css';

function Drawer({ items, selectItem, itemLabel, itemKey, isDrawerOpen }) {
  const itemNodes = items.map(item => (
    <div
      className={styles.item}
      key={item[itemKey]}
      onClick={() => selectItem(item)}
    >
      {item[itemLabel]}
    </div>
  ));
  return (
    <div className={clsx(styles.drawer, { [styles.drawerOpen]: isDrawerOpen })}>
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  itemLabel: PropTypes.string.isRequired,
  itemKey: PropTypes.string.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default Drawer;
