import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const { item } = this.props;

    let { authors, title, description } = item.volumeInfo;
    let price = "";
    if (item.saleInfo && item.saleInfo.retailPrice) {
      price = item.saleInfo.retailPrice.amount;
    } else {
      price = "N/A";
    }
    let image;
    
    let thumbnail = item.volumeInfo.imageLinks;
    if (thumbnail !== undefined) {
      image = item.volumeInfo.imageLinks.thumbnail;
    } 

    return (
      <li>
        <h1>{authors}</h1>
        <h2>{title}</h2>
        <p>$ {price}</p>
        <img src={image} alt="book appearance" />
        <p>{description}</p>
      </li>
    );
  }
}
