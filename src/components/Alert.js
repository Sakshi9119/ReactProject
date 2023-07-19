/* eslint-disable no-unused-vars */
import React from 'react'

export default function Alert(props) {


  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toupperCase;

  }

  return (
    //if props.alert is not null do further
    props.alert && <div>

<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">

<strong>{props.alert.type}</strong>: {props.alert.msg}

  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
      
    </div>
  )
}
