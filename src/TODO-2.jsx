import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import './index.css';
import ListCom from "./ListCom";
const ToDoList=()=>{
 
    const[item,setItem]=useState("");
    const[setup,newset]=useState([]);

    const Inputtext=(event)=>{
        setItem(event.target.value);
    }
    const ListOfItems=()=>{
        newset((PrevVal)=>{
            return[...PrevVal,item];
        });
        setItem(" ");
    };

    return( <>
    <div className="main_div">
     <div className="center_div">
         <br/>
         <h1>ToDoList</h1>
         <input type="text" placeholder="Add An Item"
          onChange={Inputtext} value={item}></input>
         <Button className="newBtn" onClick={ListOfItems}>
     <AddIcon/>
         </Button>
      <br/>
      <ol>
          
          {
              setup.map((todo,index)=>{
                  return <ListCom text={todo} key={index} id={index}/>
              }
             
              )
          }
      </ol>
    
    
     </div>

    </div>

     </>);

}
export default ToDoList;