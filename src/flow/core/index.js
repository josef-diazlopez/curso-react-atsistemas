import React from 'react';
import PropTypes from 'prop-types';
import flowConfig from '../';
import { connect } from 'react-redux';
import { flowSelector } from '../../selectors/flow';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
  flow: flowSelector(state),
});

const FlowDecorated = connect(mapStateToProps, null)(FlowCore);

export default FlowDecorated;

function FlowCore({ flow, dispatch}) {
  const currentState = findState(flow);
  currentState.initialAction &&
    dispatch(currentState.initialAction());

  const Component = currentState.component
    ? decorateComponent(currentState)
    : () => <div />;
  return <Component />;
}

FlowCore.propTypes = {
  flow: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  outsideData: PropTypes.object,
  events: PropTypes.object,
};

function findState(flow) {
  return (
    flowConfig.find((flowElement) => flowElement.init === flow.state) || {}
  );
}

function decorateComponent(step) {
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(step.actions, dispatch);
  return connect(step.selectors, mapDispatchToProps)(step.component);
}