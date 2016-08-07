import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateChart, ScrollChart, RemoveChart } from '../../actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {}
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
  constructor(props){
    super(props);
  }

  createChart(){//console.log(this.props)
    this.props.CreateChart(this.props.size);
  }

  scrollChart(index){
    this.props.ScrollChart(index);
  }

  removeChart(){
    this.props.RemoveChart(index);
  }

  render() {
    let {size, index} = this.props;
    return (
      <div>
        <button className="btn-secondary pure-button" onClick={()=> ::this.scrollChart(index-1)} disabled={ !index }>
          Previous Chart
        </button>
        <button className="btn-success pure-button" onClick={ ::this.createChart }>
          Create Chart
        </button>
        <button className="btn-error pure-button" disabled={ !(size-1) }>
          Delete Chart
        </button>
        <button className="btn-secondary pure-button" onClick={ ()=> ::this.scrollChart(index+1) } disabled={ size === ( index + 1 ) }>
          Next Chart
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Commands);
