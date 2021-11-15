import React from "react";
export default class Purecomponents extends React.PureComponent {
constructor(){
    super();
    this.state ={count:0}
}

render() {
    console.log(this.state.count);
    return (
        <>
            <div>
            
            <p>{this.state.count}</p>
            <button onClick={() =>{this.setState({count:this.state.count})}}>Increment</button>
            </div>
        </>
    )
}

}//agr stste change nhi hoti to PureCounter bar bar page render nhi krata 