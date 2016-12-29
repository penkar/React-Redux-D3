'use strict'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { ChangeChart } from '../../actions/index'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
    state,
    graph: state.randGraph
  }
}

const mapDispatchToProps = function(dispatch){
  return {
    dispatch,
    change: bindActionCreators(ChangeChart, dispatch)
  }
};

let chartTypes = [
  'BarChart',
  'LineChart',
  'PieChart',
  'Histogram',
]

class Content extends Component {
  constructor(props){
    super(props)
  }

  click(){
    const CHART = 'CHART'
    let {graph, dispatch} = this.props
    this.props.change(graph);
  }

  render() {
    return(
      <li className="pure-menu-item">
        <a onClick={::this.click} className="pure-menu-link">{this.props.current ? "Now viewing: " : ""}{this.props.graph}</a>
      </li>
    )
  }
}

class TableOfContents extends Component {
  constructor(props){
    super(props);
  }

  _contents(){
    let {change, graph} = this.props;
    return chartTypes.map((graphA, idx)=>{
      return(<Content graph={graphA} key={idx} change={change} current={graphA === graph.graph}/>
      )
    })
  }

  render() {
    return (
      <div className="pure-menu" style={{display:'inline-block'}}>
        <span className="pure-menu-heading">Change Chart Type</span>
        <ul className="pure-menu-list">
          {::this._contents()}
        </ul>
      </div>
    )
  }
}

const TOC = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableOfContents)

export default TOC
