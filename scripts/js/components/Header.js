'use strict'
import React, { Component } from 'react'
import TOC from './tableofcontents/toc'

class Header extends Component {
  constructor(props){
    super(props)
  }

  render (){
    return (
      <div className="sidebar pure-u-1-4">
        <div className="header">
          <h1 className="brand-title">React / Redux / D3</h1>
          <h2 className="brand-tagline" style={{color:'rgb(151, 164, 175)'}}>Simple Sidebar For A Simple Project</h2>
          <TOC />
        </div>
      </div>
    )
  }
}

export default Header;
