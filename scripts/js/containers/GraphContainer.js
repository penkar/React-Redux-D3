'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SimpleBarChart, Commands } from '../components/graph/index'

const mapStateToProps = (state) => {
  let chart = state.chartData.graphData[state.chartData.index];
  return {
    size: state.chartData.graphData.length,
    index: state.chartData.index,
    chart: state.randGraph,
    data: chart,
  }
}

class Container extends Component {
  chart() {
    switch (this.props.chart.graph) {
      case 'barChart':
        return <SimpleBarChart data={this.props.data}/>
      default:
        return <SimpleBarChart data={this.props.data}/>
    }
  }

  render() {
    let {index, size} = this.props
    let commands   = {index, size}
    return (
      <div>
        { ::this.chart() }
        <Commands {...commands}/>
      </div>
    )
  }
}

const GraphContainer = connect(
  mapStateToProps
)(Container)

export default GraphContainer;
