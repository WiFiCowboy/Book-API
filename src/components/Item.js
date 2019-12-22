import React, { Component } from 'react';

export default class Item extends Component {

  render() {

    const { item } = this.props;

    let {author, title, image, price, description} = item;
    
    return (<li>
      <h1>{author}</h1>
      <h2>{title}</h2>
      <p>{price}</p>
      <img src={image}/>
      <p>{description}</p>
    </li>)

  }
}

