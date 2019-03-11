import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroupItems from './GroupItems'
import Cart from './Cart';
import Item from './Item';

class App extends Component {

  constructor(props){
    super(props);
    this.items = [
      {name : 'kasem'},
      {name : 'belal'},
      {name : 'yosef'},
      {name : 'adam'},
      {name : 'morad'},
      {name : 'bashar'}
  ];
  }
  itemBought=(data)=>
  {
    console.log(data.props.name)
    
    
  }

  render() {
    return (
      <div className="Shop">
          <header className="Cart" style={{
              border:  'solid',
              margin:200,
              borderRadius:20,
              backgroundColor:'white'
          }}>
              <Cart/>
          </header>
          <div className="Items" style={{
              margin: 300
          }}>
              <GroupItems list = {this.items}/>
          </div>
          <footer>

          </footer>
      </div>
    );
  }
}

export default App;
