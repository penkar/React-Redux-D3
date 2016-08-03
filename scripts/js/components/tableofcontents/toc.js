import React, {Component} from 'react'
let chartTypes = [
  'BarChart',
  'LineChart',
  'PieChart',
  'Histogram',  
]


class TOC extends Component {
  constructor(props){
    super(props);
  }

  contents(){
    return chartTypes.map((chart, idx)=>{
      return(
        <li key={idx} className="pure-menu-item">
          <a className="pure-menu-link">{chart}</a>
        </li>
      )
    })

  }

  render() {
    return (
      <div className="pure-menu" style={{display:'inline-block'}}>
        <span className="pure-menu-heading">Change Chart Type</span>
        <ul className="pure-menu-list">
          {::this.contents()}
        </ul>

      </div>
    )
  }
}

export default TOC
// <div class="pure-menu custom-restricted-width">
//     <span class="pure-menu-heading">Yahoo Sites</span>
//
//     <ul class="pure-menu-list">
//         <li class="pure-menu-item"><a href="#" class="pure-menu-link">Flickr</a></li>
//         <li class="pure-menu-item"><a href="#" class="pure-menu-link">Messenger</a></li>
//         <li class="pure-menu-item"><a href="#" class="pure-menu-link">Sports</a></li>
//         <li class="pure-menu-item"><a href="#" class="pure-menu-link">Finance</a></li>
//         <li class="pure-menu-heading">More Sites</li>
//         <li class="pure-menu-item"><a href="#" class="pure-menu-link">Games</a></li>
//         <li class="pure-menu-item"><a href="#" class="pure-menu-link">News</a></li>
//         <li class="pure-menu-item"><a href="#" class="pure-menu-link">OMG!</a></li>
//     </ul>
// </div>
