import React from 'react';



export default function RangeSlider(props) {

  return (
    <div className= 'progress-con'>
      <label className = "sliderLabel" htmlFor= { `slider${props.postfixId}`} >{props.slidertitle}</label>
      <input type= 'range' name= {`sensor${props.postfixId}`} id= { `slider${props.postfixId}` }  mim= {0} max= {200}
       value= {props.sensorvalues[`sensor${props.postfixId}`]} onChange= {props.handleSensorChange} />
      <div className= 'outcome'>

        <span className= 'badge bg-secondary' id= {`reading${props.postfixId}`}>{props.sensorvalues[`sensor${props.postfixId}`] } </span>
        <span  className= 'indicator ' id= {`inicator${props.postfixId}`}
        style= {{backgroundColor: (props.sensorvalues[`sensor${props.postfixId}`] < 50)? 'yellow':
         ((props.sensorvalues[`sensor${props.postfixId}`] >= 50 ) && (props.sensorvalues[`sensor${props.postfixId}`] <= 150)) ?
         'green': 'red' }  } > </span>
      </div>
    </div>
  )

}
