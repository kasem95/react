import React, { Component } from 'react';
import { ListGroupItem} from 'react-bootstrap';

export default class Item extends Component {

    constructor(props){
        super(props);
        this.state = {
            bought: false
        };
    }
    

    buy=()=>{
        this.setState({
            bought: true
        });
    }

    render() {
        return (
            <div style={{
                display:'flex',
                marginTop: 20,
                
                }} >
                {<ListGroupItem className="row" style={{
                    width: "70%",
                }} >{this.props.name}</ListGroupItem>}
                {<button type="button" class="btn btn-primary" style={{
                    marginLeft: 20
                }}onClick={this.buy} disabled={this.state.bought}>+</button>}
            </div>
        );
    }
}
