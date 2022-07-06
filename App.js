
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
// import Example from './component/Example';
import Alert from './component/Alert';
import Buttons from './component/Buttons';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
 const [alert,setAlert] = useState(null);
 const [color,setColor] = useState('light');
 const checkColor = () =>{
if(color === 'light'){
  setColor('aqua');
  document.body.style.backgroundColor="aqua";
}else{
  setColor('light');
  document.body.style.backgroundColor="white";
}
 }
 const enableColor = ()=>{
  if(color === 'light'){
    setColor('yellow');
    document.body.style.backgroundColor = "yellow";
  }else{
    setColor('light');
    document.body.style.backgroundColor = "white";
  }
 }
const showAlert = (message,type) =>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null);
}, 2000);
}
  const enableMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
     showAlert("dark mode is enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled","success");
    }
  }
  return (
    <>
     {/* <BrowserRouter> */}
      <Navbar about="About" contact="Contact"  mode={mode} toggle={enableMode} />
     
    <Alert alert={alert}/>
     <Buttons checkColor={checkColor} enableColor={enableColor}/>
      <div className="container">
      {/* <Routes>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path="/" element={
        <TextForm mode={mode} showAlert={showAlert} />}/>
      </Routes> */}
      <TextForm mode={mode} showAlert={showAlert} />

          
       
        
        </div>
        {/* </BrowserRouter> */}
      // {/* <div className="container">
      //   <About />
      //   <Example />
      // </div> */}
    </>
  );
}

export default App;
