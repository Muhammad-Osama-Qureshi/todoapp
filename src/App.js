
import { useState } from 'react';
import './App.css';
import Digitalclock from './Components/digitalclock';
import List from './Components/List';





function App(props) {
  const [input,setinput]=useState("")
  const [output,setoutput]=useState([]) 


  function Change(e){
    setinput(e.target.value)
 
  }
  function ClickHandler(){
  setoutput((itemss)=>{
    return[...itemss,input]
  })
  setinput("")
  
  
  }
  function Clicked(id){
 
    setoutput((itemss)=>{
return(
    itemss.filter((arrEl,index)=>{
      return index !==id;
    }
    )
)

    }
    )


  }
        

  return (
  <>
  <div className="app">
  <div className="MainDiv">
    <h1>My ToDoApp</h1>
    <input type="text" className="border" placeholder="   Enter To Do Items" onChange={Change} value={input}  name="todo" id=""/> <button onClick={ClickHandler} className="add"> +</button>
    <hr/>
    <ol>
      {output.map((items,index)=>{
       return(
        <>
            <br/>
             <List text={items}
             id={index}
             key={index}
             onSelect={Clicked}
             
             />
              <br/>
          </>   
       )
      })}
      </ol>
     
  </div>
  </div>
  </>
  );
}

export default App;
