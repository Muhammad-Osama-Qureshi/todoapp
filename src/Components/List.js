import React from 'react'

export default function List(props) {
  
    return(<div>
     
        <li>

        <i className="fa fa-times" area-hidden="true" onClick={()=>{
            props.onSelect(props.id)

        }}></i>  {props.text}
       <br/>
        </li>
        </div>
    )
}
