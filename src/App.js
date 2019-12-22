import React, { Component } from 'react';
import Search from './components/Search';
// import Search from './components/Filters';
import Filters from './components/Filters';
import Books from './components/Books';
import Item from './components/Item';
import NoReturn from './components/NoReturn';



//API-Key: AIzaSyBCEXLIp1u2q1WSHmApGMtvzmbnmKxL5go
//search URL: https://www.googleapis.com/books/v1/volumes?q=search+terms 



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResults: [],
        searchInput:'',
        bookType: 'all',
        searchQuery: 'henry',
        filterType: 'ebooks'
    };
  }
// https://www.googleapis.com/books/v1/volumes?q=Henry&Key=AIzaSyBCEXLIp1u2q1WSHmApGMtvzmbnmKxL5go
// test submit button
testSubmit = (e) => {
  e.preventDefault();
  const search = this.state.searchInput;
  const searchURL = "https://www.googleapis.com/books/v1/volumes?q=";
  const key = "&Key=AIzaSyBCEXLIp1u2q1WSHmApGMtvzmbnmKxL5go";
  const newSearchURL = searchURL + search + key;
  console.log(newSearchURL); 
  fetch(newSearchURL)
  .then(response => {
    if (response.ok){
      return response.json()
    } else {
      throw new Error()
    }
  })
  .then (responseJson => this.handleSearchResults(responseJson.items)) 
  .catch(Error => this.handleError()
  )
}

handleError(){
  console.log('No books found')
}

handleFilter = (e) => {
  this.setState({filterType: e.target.value});
  console.log(this.state.filterType)
}


handleBooks = (e) => {
  this.setState({bookType: e.target.value});
  console.log(this.state.bookType)
}

handleSearchInput = (e) => {
  this.setState({searchInput: e.target.value})
  console.log(this.state.searchInput)
} 

handleSearchResults = (items) => {
  this.setState({searchResults: items})
}

render(){
  let booksFound;
  const apiRes = this.state.searchResults;
  if(apiRes !== undefined){
    booksFound = this.state.searchResults.map(item => (<Item item={item} key={item.id}/>))
  } else {
    booksFound = <NoReturn />;
  }

  return (
    <div className="App">
      <header className="App-header">
        Google Book Search
      </header>
      <form onSubmit={this.testSubmit}>
      <Search handleSearchInput={this.handleSearchInput}/>
      <Filters handleFilter={this.handleFilter}/>
      <Books handleBooks={this.handleBooks}/>
      </form>
      <ul>{booksFound}</ul>
    </div>
  );
}
  
}


