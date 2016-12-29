'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GraphTitle, SimpleBarChart, SimpleLineChart, Commands } from '../components/graph/index'

const mapStateToProps = (state) => {
  let { graph } = state.randGraph
  let {index} = state.chartData
  let chart = state.chartData[state.randGraph.graph][index];
  return {
    size: state.chartData[graph].length,
    index: index,
    chart: state.randGraph,
    data: chart,
  }
}

class Container extends Component {
  chart() {
    let {data} = this.props;
    switch (this.props.chart.graph) {
      case 'barChart':
        return <SimpleBarChart data={data}/>
      case 'LineChart':
        return <SimpleLineChart data={data} />
      default:
        return <SimpleBarChart data={data}/>
    }
  }

  render() {
    let {index, size, data} = this.props
    let commands = {index, size}
    return (
      <div>
        <GraphTitle title={data.title} />
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
