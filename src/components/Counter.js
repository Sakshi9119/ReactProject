import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  increment() {
    // this.state.count=this.state.count+1; //won't give o/p

    //use constructor (setState)
    // this.setState({
    //     count:this.state.count + 1
    //   },()=>{
    //     console.log('callback val', this.state.count)
    //   })

     //five
     this.setState(prevState => ({
      count: prevState.count + 1

    }))

      console.log(this.state.count)
    }

   
    

  incFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    // this.increment();
  }


  render() {
    return (

      <div>
        <div>
          count - {this.state.count}
          <br />
          {/* <button onClick={()=>this.increment()}>Increment</button> */}
          <button onClick={() => this.incFive()}>Increment</button>
        </div>
      </div>
    )
  }
}

export default Counter;
