import React from "react";
import './design.css';
import Button from 'react-bootstrap/Button';
export default function showList(props) {
   const list = [props.value];

    return (
        <>
            <div className="list">
               <p>{list}
               <Button onClick={props.EditData}>Edit</Button>
                <Button onClick={()=>{props.sendData(props.id)}} variant="danger">X</Button></p>
            </div>
            
        </>);
}
