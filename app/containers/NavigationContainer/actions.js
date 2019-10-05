/*
 *
 * NavigationContainer actions
 *
 */

import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDED,
  REQUEST_TOPICS_FAILED,
  SELECT_TOPIC,
  SELECT_TOPIC_SUCCEEDED,
  TOGGLE_DRAWER,
} from './constants';

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function requestTopicsSucceeded(topics) {
  return {
    type: REQUEST_TOPICS_SUCCEEDED,
    topics,
  };
}

export function requestTopicsFailed(message) {
  return {
    type: REQUEST_TOPICS_FAILED,
    message,
  };
}

export function selectTopic(topic) {
  return {
    type: SELECT_TOPIC,
    topic,
  };
}

export function selectTopicSucceeded(topic) {
  return {
    type: SELECT_TOPIC_SUCCEEDED,
    topic,
  };
}


export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  };
}
