import {
  // take,
  call,
  put,
  // select
} from 'redux-saga/effects';
import { REQUEST_LINKS } from './constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';
import { takeEvery } from 'redux-saga';


// Individual exports for testing
function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then(response => response.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinksSucceeded(links));
  } catch (error) {
    yield put(requestLinksFailed(error.message));
  }
}

export function* defaultSaga() {
  yield* takeEvery(REQUEST_LINKS, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
