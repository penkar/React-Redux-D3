import React, { Component } from 'react'

class Commands extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let {size, index} = this.props;
    console.log( index, size);
    return (
      <div>
        <button className="button-secondary pure-button" disabled={ !index }>Previous Chart</button>
        <button className="button-success pure-button">Create Chart</button>
        <button className="button-error pure-button" disabled={ !index }>Delete Chart</button>
        <button className="button-secondary pure-button" disabled={ size === ( index + 1 ) }>Next Chart</button>
      </div>
    )
  }
}

export default Commands;
