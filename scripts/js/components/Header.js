import React, { Component } from 'react'

class Header extends Component {
  constructor(props){
    super(props)
  }

  render (){
    return (
      <div className="sidebar pure-u-1-4">
        <div className="header">
          <h1 className="brand-title">React / Redux / D3</h1>
          <h2 className="brand-tagline">Simple Sidebar For A Simple Project</h2>
        </div>
      </div>
    )
  }
}

export default Header;
