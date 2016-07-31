import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SimpleBarChart } from '../components/graph/index'
import Header from '../components/Header'

const mapStateToProps = (state) => {
  return {
    shape: state.randShape,
    visible: state.randVisible,
    chart: state.randGraph,
  }
}

class Start extends Component {
  render() {console.log(this.props);
    return (
      <div>
        <Header />
        <SimpleBarChart />
      </div>
    )
  }
}

const Start2 = connect(
  mapStateToProps
)(Start)

export default Start2;
