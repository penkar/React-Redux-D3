'use strict'
import React, { Component, PropTypes } from 'react'

export default class SimpleLineChart extends Component {
  static propTypes = {
    data: PropTypes.object,
  }

  constructor(props) {
    super(props)
  }

  _createLines(data) {
    return null;
  }

  render() {
    let {data} = this.props.data;
    return(
      <svg>
        {::this._createLines(data)}
      </svg>
    )
  }
}
