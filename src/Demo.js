import React from 'react';
import {Button} from 'react-bootstrap';
import './marg.css'
export default class Demo extends React.Component {
   
    state = {count:0}
    onIncrement=()=> {
         this.setState({ count:this.state.count + 1 });
    
    };

    onDecrement=()=> {
        if(this.state.count>0){
         this.setState({ count: this.state.count - 1 });}
         else {
             this.setState({ count: this.state.count===0});
         }

    };
    onReset=()=> {
        this.setState({ count: this.state.count*0});
    };

    render() {
        return (<div className="marg">
           <pre><Button className="btn btn-info" >{this.state.count}</Button><br/><br/>
            <Button onClick={this.onIncrement} className="btn btn-success" >Increment</Button>   
            <Button onClick={this.onDecrement} className="btn btn-danger">Decrement</Button>   
             <Button onClick={this.onReset} className="btn btn-primary">  Reset</Button>   
            </pre>

        </div>
        );
    }
};