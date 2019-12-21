import React, { Component } from 'react';

export default class Search extends Component {

  render(){
    return(
      <div>
        <label>Search: </label>
        <input type="text" placeholder="Search.." onChange={this.props.handleSearchInput}></input>
        <button>Search</button>
      </div>
    )
  }
}