'use strict'
import React, { Component, PropTypes } from 'react'
import pallette from '../pallette'

export default class SimpleBarChart extends Component{
  static propTypes = {
    data: PropTypes.object,
  }

  constructor(props) {
    super(props)
  }

  _createRows(data) {
    let colors = pallette.chartfill;
    return data.map((value, index)=> {
      return (
        <g key={index} transform={`translate(0,${index * 20})`}>
          <rect height="20" width={value * 10} fill={colors[index % colors.length]}></rect>
          <text x={value*10 + 20} y="9.5" dy=".35em">{value}</text>
        </g>
      )
    });
  }

  render() {
    let {data} = this.props.data;
    return (
      <svg className="chart" width="100%" height={(data.length * 21).toString() + 'px'}>
        {::this._createRows(data)}
      </svg>
    )
  }
}
