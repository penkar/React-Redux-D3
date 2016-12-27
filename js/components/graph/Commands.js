import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateChart, ScrollChart, RemoveChart } from '../../actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
    graph: state.randGraph.graph
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    CreateChart: bindActionCreators(CreateChart, dispatch),
    ScrollChart: bindActionCreators(ScrollChart, dispatch),
    RemoveChart: bindActionCreators(RemoveChart, dispatch)
  }
};

class Commands extends Component {
  constructor(props) {
    super(props);
  }

  createChart() {
    let { CreateChart, graph, size } = this.props
    CreateChart(this.props.size, graph);
  }

  scrollChart(index) {
    this.props.ScrollChart(index);
  }

  removeChart() {
    let { index, graph, RemoveChart } = this.props;
    RemoveChart(index, graph);
  }

  render() {
    let {size, index} = this.props;
    return (
      <div>
        <button className="btn-secondary pure-button" onClick={()=> ::this.scrollChart(index-1)} disabled={ !index }>
          Previous Chart
        </button>&nbsp;
        <button className="btn-success pure-button" onClick={ ::this.createChart }>
          Create Chart
        </button>&nbsp;
        <button className="btn-error pure-button" onClick={ ::this.removeChart } disabled={ !(size-1) }>
          Delete Chart
        </button>&nbsp;
        <button className="btn-secondary pure-button" onClick={ ()=> ::this.scrollChart(index+1) } disabled={ size === ( index + 1 ) }>
          Next Chart
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Commands);
