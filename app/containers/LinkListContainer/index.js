/*
 *
 * LinkListContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';
import { requestLinks } from './actions';

import LinkList from '../../components/LinkList';

export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.requestLinks(this.props.topicName);
  }

  componentWillReceiveProps({ topicName }) {
    if (topicName !== this.props.topicName) {
      this.props.requestLinks(this.props.topicName);
    }
  }

  render() {
    return (
      <LinkList {...this.props} />
    );
  }
}

LinkListContainer.propTypes = {
  requestLinks: PropTypes.func.isRequired,
  topicName: PropTypes.string.isRequired,
};

const mapStateToProps = selectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: (topicName) => dispatch(requestLinks(topicName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
