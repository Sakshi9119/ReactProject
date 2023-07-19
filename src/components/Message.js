
// states 



import React from "react";
import { Component } from "react";

class Message extends Component{
  constructor(){
    super()
    this.state={
      message:"WElcome Visitor"
    }
  }

  changeMsg(){
    this.setState({
      message:'Thankyou for Subscribing!'
    })
  }
  render(){
    return(
      <div>
    <h1>{this.state.message}</h1>
    <button onClick={()=>this.changeMsg()}>Subscribe</button>

      </div>
    )
  }
}

// const Message=props=>{
//   console.log(props)
//   return(

//     <h2>Welcome visitors!</h2>
//   )
// }

export default Message;