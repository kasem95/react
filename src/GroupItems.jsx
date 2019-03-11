import React, { Component } from 'react'
import Item from './Item';
import { ListGroup} from 'react-bootstrap';

export default class GroupItems extends Component {
    constructor(props){
        super(props);
        
       this.list = props.list.map((name,index)=>
            <Item name = {name.name} key={index}/>
       );

    }

    render() {
        return (
            <div style={{
                borderStyle:'solid',
                borderRadius:20,
            }}>
                <ListGroup style={{
                    padding:50,
                    
                }}>
                    {this.list}
                </ListGroup>
            </div>
        );
    }
}
