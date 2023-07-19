
//props

import React from "react";



// Normal Fun
// function Greet(){
//   return <h1>Hello Sakshi!</h1>
// }

//Arrow Fun
// const Greet=()=><h1>Hello Sakshi!</h1>

//Props
// const Greet=props=>{
//   console.log(props)
//   return(

//     <h1>Hello {props.name} and age is{props.age}</h1>
//   )
// }

//Destructuring props



const Greet = (name,age)=> {
  // console.log(props)
  return (
    <div>
    <h1>
      Hello {name} a.k.a. {age}
    </h1>
      
    </div>
  )
}

export default Greet;



