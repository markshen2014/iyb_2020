import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addOne, minusOne } from './actions/testActions';
 
class Counter extends Component {
    
    inc = () =>{
        //this.props.dispatch({ type: 'INCREMENT' }); 
        this.props.addOne()
    }
 
    dec = () =>{
       // this.props.dispatch({ type: 'DECREMENT' });
       this.props.minusOne()
    }
 
    render() {
        return (
            <div>
                <button onClick={this.dec}>-</button>
                <span>{this.props.count} </span>
                <button onClick={this.inc}> +</button>
            </div>
        )
    }    
}
 
function mapStateToProps(state) {
    return {
      count: state.test.count
    };
  }
 
  export default connect(mapStateToProps,{ addOne ,minusOne })(Counter);