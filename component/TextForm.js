import React,{useState} from 'react'

export default function TextForm(props) {

    const [count,setCount] = useState(0); 
const [text,setTeaxt] = useState("");
const toUppercase = () => {
    let newText = text.toUpperCase();
    setTeaxt(newText);
   props.showAlert("converted to upperCase","success");
}
const tolowercase = () => {
    let newText = text.toLowerCase();
    setTeaxt(newText);
    props.showAlert("converted to toLowerCase","success");
}
const remove = () =>{
    setTeaxt('');
    props.showAlert("text is removed","success");
}
const handleCopy= ()=>{
    var text = document.getElementById('floatingTextarea');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text is copied","success");
}
const removeSpace = ()=>{
   let newText = text.split(/[ ]+/);
   setTeaxt(newText.join(' '));
   props.showAlert("extra spaces removed","success");
}
const handle = (event) =>{
setTeaxt(event.target.value);
}
  return (
      <>
      <h1 style={{color : props.mode === 'light' ? 'black' : 'white'}}>TextForm</h1>
      <div className="container" >
    <textarea onChange={handle} className="form-control" value={text}  style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}} rows="10" id="floatingTextarea"></textarea>
    <button onClick={toUppercase} className="btn btn-primary my-3 mx-1"  >toUppercase</button>
    <button onClick={tolowercase} className="btn btn-primary my-3 mx-1">tolowercase</button>
    <button onClick={remove} className="btn btn-primary my-3 mx-1">remove</button>
    <button onClick={handleCopy} className="btn btn-primary my-3 mx-1">copy text</button>
    <button onClick={removeSpace} className="btn btn-primary my-3 mx-1">remove extra spaces</button>
    <div className="container my-4" style={{color : props.mode === 'light' ? 'black' : 'white'}}> 
        <p>{text.split(" ").length} words and character {text.length}</p>
        <p>time to read {0.008 * text.split(" ").length}</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text:'enter some text to preview'}</p>
        
    </div>
   </div>
  < br/>
  <br/>
  {/* <p>count {count}</p>
<button onClick={()=>setCount(0)} className="btn btn-primary mx-2">reset</button>
<button onClick={()=>setCount(prevCount => prevCount -1)} className="btn btn-primary mx-2">decrement</button>
<button onClick={()=>setCount(prevCount => prevCount +1)} className="btn btn-primary mx-2">increment</button> */}
    </>
  )
}
