import React from "react";
import ShowList from './showList';
import Button from 'react-bootstrap/Button';
import './design.css';

export default class ToDo extends React.Component {
    state = {  Discription: "", list: [] };
    handleChange = (event) => {
        this.setState({ Discription: event.target.value })
    };

    AddHandler = (event) => {
        if (this.state.Discription !== "") {
            const list = [...this.state.list, this.state.Discription];
            this.setState({ list: list ,Discription:''});
        }
    } 
   
    DeletItem= (id) => {
        console.log("delet");
        const oldList = [...this.state.list];
        const list=oldList.filter((element,i) => {return i!==id})
        this.setState({ list: list})
    }

    EditData= (id) => {
        const EditData=[...this.list]
        console.log(EditData)
    }
    render() {
        return (
            <form key={this.i}>
                <div className="inputBox">
                <div >
                   <h1> My ToDo</h1>
                    Description:<br/>
                    <input type="textarea" height="100" width="100" name="Discription" value={this.state.Discription} onChange={this.handleChange} />
                </div>
                   <br/> <Button type="button" variant="success" onClick={this.AddHandler}>Add</Button><br />
                        <p>list items</p>
                    {
                        this.state.list.map((value, i) => { return <ShowList key={i} value={value} id={i} sendData={this.DeletItem} EditData={this.EditData}/> })
                        //<ShowList value={this.state.list}/>
                      
                    }
                </div>
            </form>

        )
    }
}