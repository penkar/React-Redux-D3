import React from 'react';
import D3 from 'd3';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    shape: state.randShape.shape,
    visible: state.randVisible.visible
  }
}

class Start extends React.Component {
  render() {
    return <h1>Start</h1>
  }
}

const Start2 = connect(
  mapStateToProps
)(Start)

export default Start2;
