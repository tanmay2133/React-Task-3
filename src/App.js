import React from 'react'
import { useState } from 'react'
import './App.css'
const Colorbutton=({color,onClick})=>{
    return(
      <button onClick={()=>onClick(color)} style={{backgroundColor:color}}>
      </button>
    );
  }
const App = () => {
  
  const [color,setcolor]=useState('white');
  const [showColorButtons, setShowColorButtons] = useState(false);
  const bgcolor=(value)=>{
    setcolor(value);
    setShowColorButtons(false);
  }
  const show=()=>{
    setShowColorButtons(true);
  }
  return (
    <div className="main">
      <h1>Color Picker</h1>
      <div style={{backgroundColor:`${color}`,minHeight:'75vh', margin:'2%',borderRadius:'3%',boxShadow:'2px 2px black'}}>
          {showColorButtons && (
          <div className="buttons">
            <Colorbutton color='#FF0000' onClick={bgcolor}/>
            <Colorbutton color='#02FE01' onClick={bgcolor}/> 
            <Colorbutton color='#0000FF' onClick={bgcolor}/>
            <Colorbutton color='#FFFF00' onClick={bgcolor}/>
            <Colorbutton color='#FF00FE' onClick={bgcolor}/>
            <Colorbutton color='#00FEFE' onClick={bgcolor}/>
            <Colorbutton color='#FEA500' onClick={bgcolor}/>
            <Colorbutton color='#81007F' onClick={bgcolor}/>
            <Colorbutton color='#FFC0CB' onClick={bgcolor}/>
            <Colorbutton color='#008000' onClick={bgcolor}/>
            <Colorbutton color='#FE6245' onClick={bgcolor}/>
            <Colorbutton color='#01CDD1' onClick={bgcolor}/>
            <Colorbutton color='#8B4512' onClick={bgcolor}/>
            <Colorbutton color='#FF8B00' onClick={bgcolor}/>
            <Colorbutton color='#4682B4' onClick={bgcolor}/>
            <Colorbutton color='#FED700' onClick={bgcolor}/>
          </div>)}
          <button className='pick' onClick={show}>Pick Color</button>
      </div>
    </div>
  )
}

export default App
