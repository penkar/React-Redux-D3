'use strict'
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
      <div className="pure-g layout">
        <Header />
        <div className="content pure-u-1 pure-u-md-3-4">
          <GraphContainer />
        </div>
      </div>
    )
  }
}

const Start2 = connect(
  mapStateToProps
)(Start)

export default Start2;
