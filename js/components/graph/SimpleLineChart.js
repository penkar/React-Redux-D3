'use strict'
import React, { Component } from 'react'

class SimpleLineChart extends Component {
  constructor(props) {
    super(props)
  }

  createLines(){
    return null;
  }

  render(){
    return(
      <svg>
        {::this.createLines()}
      </svg>
    )
  }
}

export default SimpleLineChart
