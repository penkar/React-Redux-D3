'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SimpleBarChart } from '../components/graph/index'

const mapStateToProps = (state) => {
  let chart = state.chartData.graphData[state.randGraph.index];
  return {
    chart: state.randGraph,
    data: chart,
  }
}

class Container extends Component {
  render() {
    switch (this.props.chart.graph) {
      case 'barChart':
        return <SimpleBarChart data={this.props.data}/>
      default:
        return <SimpleBarChart data={this.props.data}/>
    }
  }
}

const GraphContainer = connect(
  mapStateToProps
)(Container)

export default GraphContainer;
