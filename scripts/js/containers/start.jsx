import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GraphA } from '../components/graph/index'

const mapStateToProps = (state) => {
  return {
    shape: state.randShape.shape,
    visible: state.randVisible.visible
  }
}

class Start extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Start</h1>
        <GraphA></GraphA>
      </div>
    )
  }
}

const Start2 = connect(
  mapStateToProps
)(Start)

export default Start2;
