import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import GraphContainer from './GraphContainer'

const mapStateToProps = (state) => {
  return {
    shape: state.randShape,
    visible: state.randVisible,
    chart: state.randGraph,
  }
}

class Start extends Component {
  render() {
    return (
      <div>
        <Header />
        <GraphContainer />
      </div>
    )
  }
}

const Start2 = connect(
  mapStateToProps
)(Start)

export default Start2;
