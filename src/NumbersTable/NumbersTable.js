import React from 'react';
import { Component } from 'react';
import './NumbersTable.css';

class NumbersTable extends Component {
    showTable () {
        let numberArray = []
        for (let i = 1; i <= this.props.limit; i++) {
            let style = {
              backgroundColor: i % 2 == 0 ? 'red' : 'white',
              width: "30px"
            }
            numberArray.push(<li style={style}>{i}</li>)
    }
    return numberArray;
}
    render(){
        return (        
            <ul className="NumbersTable">
        {this.showTable()}
      </ul>
        )
    }
}

export default NumbersTable;