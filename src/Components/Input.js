/*
import React, { useState } from 'react'

export default function Input() {
    const [name,setname]=useState("")
    const[fullname,setfullname]=useState(name)
    const [pass,setpass]=useState("")
    const[sap,setsap]=useState(pass)

    function handler(event){
  setname(event.target.value)
  
    }
    function fname(){
        setfullname(name)
        setsap(pass)
    }
    function handler2(e){
        setpass(e.target.value)
    }
   



    
    return (
        <div>
            <h1>Hello {fullname}{sap}</h1>
            <input type="text" onChange={handler} value={name} name="Name" id="" />
            <input type="text" onChange={handler2} value={pass} name="password" id=""/>
            <br/>
            <button onClick={fname}>Submit</button>
        </div>
    )
}
*/



import React, { useState } from 'react'


export default function Input() {
    const [fullname,setFullName]=useState("")
    const [fulname,setFullname]=useState({
        fname:"",
        lname:"",
        email:""
    
     
    })
    function change(){
        setFullName(()=>{
            return (
                <>{fulname.fname}   {fulname.lname}<p style={{fontSize:"12px",color:"red"}}>{fulname.email}</p>
                {alert("Form Submitted")}</>
            )
        } )
    }

  const Handle= (event)=>{
const value=event.target.value
const name=event.target.name
setFullname((prev)=>{
    if(name==="fname"){
        return{
            fname:value,
            lname:prev.lname
        }
       
    }
    else if(name==="lname"){
        return {
            fname:prev.fname,
            lname:value
        }
    
    }
    else if(name==="email"){
        return{
            fname:prev.fname,
            lname:prev.lname,
            email:value
        }

    }
})
  }
    return (
        <div>
            <h1>Hello {fullname} </h1>
            <input type="text" onChange={Handle} value={fulname.fname} name="fname" id=""/>
            <br/>
            <input type="text" onChange={Handle} value={fulname.lname} name="lname" id=""/>
            <br/>
            <input type="email" onChange={Handle} value={fulname.email}  name="email" id=""/>
            <br/>
            <button onClick={change} >Submit</button>
        </div>
    )
}





/*
import React from 'react'




class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '',
    firstname:'' };
    }
    myChangeHandler = (event) => {
      this.setState(
          {username: event.target.value,
            firstname:event.target.value
    },
    (prev,name)=>{
    if(name==="username"){
        return{
            username:event.target.value,
            firstname:""
        }
        
    }
    else if(name=="firstname"){
     return{
        username:"",
        firstname:event.target.value
     }       
    }
    
}
    )



    }
    render() {
      return (
        <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
          value={this.props.username}  
          name="username"
        />
        <input
          type='text'
          onChange={this.myChangeHandler}
          value={this.props.firstname}
          name="firstname"  
       />
        </form>
      );
    }
  }


  export default MyForm */