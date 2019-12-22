import React, { Component } from 'react';



export default class Books extends Component{
  render(){
    return(
      <div>
        <label>Print type</label>
        <select onChange={this.props.handleBooks}>
          <option value='all'>All</option>
          <option value='books'>Book</option>
          <option value='magazines'>Magazine</option>
        </select>
      </div>
    )
  }
}