import React, {useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState('Enter text here');
   const handleUpClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
   }
   const handleOnChange = (Event)=>{
    console.log("On Change");
    setText(Event.target.value);
   }
  return (
    <div>
        <h1>{props.heading} </h1>
        <div className="container">
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>
    Convert to Uppercase
</button>
<button className="btn btn-primary mx-2">
    Convert to Lowercase
</button>
<button className="btn btn-primary mx-2">
    Convert to Uppercase
</button>

<div className="container my-5">
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} character</p>
</div>
</div>
  )
}
