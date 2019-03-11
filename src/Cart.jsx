import React, { Component } from 'react'
import ShoppingCart from './ShoppingCart.svg';
import Item from './Item';

export default class Cart extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
          <img src={ShoppingCart} alt="shop"/>

          
      </div>
    )
  }
}

