import React, { Component } from 'react';

export default class Item extends Component {

  render() {

    const { item } = this.props;

    let { authors, title, description } = item.volumeInfo;
    let { author } = authors[0];
    //let {price} = item.saleInfo.retailPrice.amount;
    //let {price} = listPrice.amount;
    // let {image} = item.volumeInfo.imageLinks.thumbnail;

    return (<li>
      <h1>{author}</h1>
      <h2>{title}</h2>
      {/* <p>{price}</p>
      <img src={image} /> */}
      <p>{description}</p>
    </li>)

  }
}

