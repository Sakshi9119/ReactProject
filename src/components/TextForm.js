/* eslint-disable no-restricted-globals */
 //useState hook

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useState} from 'react'

function TextForm(props) {

  const handleUpClick =()=>{
    console.log("Uppercase was clicked" + text);

    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  

  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  const handleDownClick=()=>{
    console.log("Lowercase was clicked"+text);

    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }

  const handleClear=()=>{
    let newText=("");
    setText(newText);
    props.showAlert("Text Cleared","success");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  // const handleDownClick=(event)=>{
  //   console.log("On change");
  //   setText(event.target.value);
  // }
  //useState hook
  const[text,setText]=useState('');  //can use any no of var
  // we cant update value here as we update var, here we need to ude function setCount

  // text="new text" //wrong way
  // srtText("new Text")  //correct way

  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>

    <h1>{props.heading}</h1>
    
{/*     
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div> */}
 
  
  <div className="form-group">
    <label for="exampleFormControlTextarea1" className='my-3' >
    {/* <h3>
    Write Your text here...
    </h3> */}
    </label>

    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'white':'light'}}></textarea>


  </div>
  <button type="button" className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
  <button type="button" className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to Lowercase</button>
  <button type="button" className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>

  <button type="button" className="btn btn-primary mx-3" onClick={speak}>Speak</button>

  {/* <button type="button" className="btn btn-primary" onClick={speak}>Speak</button> */}

  <div className="container my-3" id='my_cont' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Text Summary</h1>
    <p>{text.split(" ").length} words and {} {text.length} characters
    </p>
    <p>{0.008*text.split(" ").length} min to read</p>

    <h2>
      Preview
    </h2>
    <p>{text.length>0?text:"Enter something in the text area for preview"}</p>
  </div>


    </div>
  )
}

export default TextForm
