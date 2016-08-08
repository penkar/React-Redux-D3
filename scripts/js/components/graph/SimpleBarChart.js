'use strict'
import React, { Component } from 'react'
import d3 from 'd3'
import pallette from '../pallette'

class SimpleBarChart extends Component{
  constructor(props) {
    super(props)
  }

  createRow(index, value) {
    let colors = pallette.chartfill;
    return (
      <g key={index} transform={`translate(0,${index * 20})`}>
        <rect height="20" width={value * 10} fill={colors[index % colors.length]}></rect>
        <text x={value*10 + 20} y="9.5" dy=".35em">{value}</text>
      </g>
    )
  }

  createRows(data) {
    return data.map((data, idx)=> {return ::this.createRow(idx, data)});
  }

  render() {
    let {data} = this.props.data;
    return (
      <svg class="chart" width="100%" height={(data.length * 21).toString() + 'px'}>
        {::this.createRows(data)}
      </svg>
    )
  }
}

export default SimpleBarChart
