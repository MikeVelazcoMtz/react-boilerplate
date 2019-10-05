import {
  // take,
  call,
  put,
  // select
} from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import { SELECT_TOPIC } from '../NavigationContainer/constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';
// Individual exports for testing
function fetchLinksFromServer({ name }) {
  return fetch(`http://localhost:3000/api/topics/${name}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    // TODO: dispatch action to store links
    yield put(requestLinksSucceeded(links));
  } catch (error) {
    yield put(requestLinksFailed(error.message));
  }
}

export function* defaultSaga() {
  yield* takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
