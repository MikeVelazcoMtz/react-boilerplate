import { createSelector } from 'reselect';

import selectNavigationContainer from '../NavigationContainer/selectors';

/**
 * Direct selector to the linkListContainer state domain
 */
const selectLinkListContainerDomain = () => state => state.get('linkListContainer');

/**
 * Other specific selectors
 */

const selectRouteTopic = () => (_, props) => props.params.topicName;

const selectTopic = () => createSelector(
  selectNavigationContainer(),
  selectRouteTopic(),
  (navigationState, routeTopicName) => {
    const selectedTopic = navigationState.topics.find(({ name }) => name === routeTopicName);
    return selectedTopic || { name: '' };
  }
);

/**
 * Default selector used by LinkListContainer
 */

const selectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain(),
  selectTopic(),
  (substate, { name }) => ({ ...substate.toJS(), topicName: name }),
);

export default selectLinkListContainer;
export {
  selectLinkListContainerDomain,
};
