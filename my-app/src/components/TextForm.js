import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Write the text here');

    const handleUpperChange = () => {
        console.log("Upper Case was made")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Upper Case Was made Successfully!","succes")
    }

    const handleLowerChange = () => {
      console.log("Lower Case was made")
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Lower Case Was made Successfully!","succes")
    }

    const handleClearChange = () =>{
      console.log("Text was Clear")
      let newText = ""
      setText(newText)
      props.showAlert("Text Was Cleared Successfully!","succes")
    }

    const handleRemoveSpace = () =>{
      console.log("Extra Space was removed")
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Space Was reomved Successfully!","succes")
    }

    const handleOnChange = (event) => {
      setText(event.target.value)
    }

  return (
    <>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#192841':'white'}}>
        <h2> {props.heading}</h2>
        <div>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#192841':'white',color:props.mode==='dark'?'white':'black'}}onChange= {handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        </div>
        <button className="btn btn-primary" onClick={handleUpperChange}>Make Uppper Case</button>
        <button className="btn btn-primary mx-3" onClick={handleLowerChange}>Make Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearChange}>Clear The Text</button>
        <button className="btn btn-primary mx-3" onClick={handleRemoveSpace}>Remove Extra Space</button>
      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#192841':'white'}}>
        <h2>Your Text Summary</h2>
        <p>Words : {text.length>0 ? text.split(" ").length : 0}   Character : {text.length} </p>
        <p>Time to Read : {0.008 * text.split(" ").length}  </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text in the above text area to Preview"}</p>
      </div>
    </>
  )
}
