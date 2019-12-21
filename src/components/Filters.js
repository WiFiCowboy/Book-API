import React, { Component } from 'react';

// Allow filters such as type of book or whether the book is a free ebook or not.

export default class Filters extends Component{
  render(){
    return(
      <div>
        <label>Book Type</label>
        <select onChange={this.props.handleFilter} >
          <option value='full'>Full</option>
          <option value='free-book'>free-ebooks</option>
          <option value='paid-ebooks'>paid-ebooks</option>
          <option value='ebooks'>ebooks</option>
        </select>
      </div>
    )
  }
}

// //partial - Returns results where at least parts of the text are previewable.
// full - Only returns results where all of the text is viewable.
// free-ebooks - Only returns results that are free Google eBooks.
// paid-ebooks - Only returns results that are Google eBooks with a price.
// ebooks - Only returns results that are Google eBooks, paid or free. Examples of non-eBooks would be publisher content that is available in limited preview and not for sale, or magazines. 

