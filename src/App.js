/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
// 
import React, { useState } from "react";
// import { Switch } from 'react-router-dom'
// import ExpenseItem from "./components/ExpenseItem";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import Greet from "./components/Greet";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom;


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled

  const [alert, setAlert] = useState(null);

  //to show alert msgs
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  //at start alert was null.. noow an obj


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(6 6 6 / 70%)';

      //alert
      showAlert("Dark mode has been enabled", "success"); //msg,type
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

      //alert
      showAlert("Light mode has been enabled", "success"); //msg,type
    }

  }

  // const toggleBlueMode=()=>{
  //   if(mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor='rgb(6 6 6 / 70%)';

  //     //alert
  //     showAlert("Dark mode has been enabled", "success"); //msg,type
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor='white';

  //     //alert
  //     showAlert("Light mode has been enabled", "success"); //msg,type
  //   }

  // }


  return (

    //JSX
    <div>
      {/* <h2>My App</h2>
      <p>This is a element</p>
      <ExpenseItem></ExpenseItem> */}


      {/* Props  */}

      {/* <Greet name="Bruce" age="21" />
      <Greet name="Sakshi" age="22" />
      <Greet name="Stuti" age="23" />


      <Welcome/>

      <Message /> */}

      {/* <Counter /> */}
      {/* <Router> */}

        <Navbar title="myNav" abtText="About" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

        <div className="container my-3">

          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
              {/* <Home /> */}

            {/* </Route> */}
          {/* </Switch> */}


        </div>
      
      {/* </Router > */}
    </div>
  );
}

export default App;
