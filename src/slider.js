import React from 'react';
import {useState} from 'react';
import './slider.css';
 function Slider(props){
   const [value, setvalue] = useState(50)

   function handleChange(e) {
    setvalue (e.target.value)
   document. getElementById('indicator').
   style.color = (e.target.value < 50) ? "blue" : (e.target.value == 50) ? "gray"
   : "red" ;
}
   return  (
     <div className = "sliderCon">
        <div className = 'container'>
          <label className = "slidervar" htmlFor="sliderVar"  >{props.sliderunits}</label>
          <input type= "range" name="sliderGuage" id = {props.id}  value ={value} onChange = {handleChange} min = '0' max = '100'/>
          <div className = "val-indicator">
            <p> <output id ="value">{value}</output> </p>
            <span className = "indicator" id = "indicator">color</span>
          </div>
        </div>
     </div>
   );
 }

export default Slider ;
