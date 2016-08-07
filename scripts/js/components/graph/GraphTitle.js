import React, { Component } from 'react'

class GraphTitle extends Component{
  constructor(props){
    super(props)
  }

  render() {
    return <h1>{this.props.title}</h1>
  }
}

export default GraphTitle
