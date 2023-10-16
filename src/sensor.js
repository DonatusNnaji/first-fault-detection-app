import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sensor.css';

function Sensor () {
  const [sensorvalues, setSensorValues] = useState({
    sensor1: 100, sensor2: 100, sensor3: 100, sensor4: 100, sensor5: 100, sensor6: 100
  });
  const displayFaultMessage = useRef(" fault messages");
  const handleSensorChange = (event) => {
    const {name, value} = event.target;
    const upDatesensor = (prevValue) => ({ ...prevValue, [name]: value }) ;
    setSensorValues(upDatesensor);
  }

  function sdgSign (minThreshold, val, maxThreshold) {
    return ( (val < minThreshold) ?
      "-"
          : ((val >= minThreshold) && (val <= maxThreshold)) ?
      "0"
          : "1")
  }

  const handleSumit = (event) => {
    event.preventDefault();

    const s1 = sdgSign(50, sensorvalues.sensor1, 150);
    const s2 = sdgSign(50, sensorvalues.sensor2, 150);
    const s3 = sdgSign(50, sensorvalues.sensor3, 150);
    const s4 = sdgSign(50, sensorvalues.sensor4, 150);
    const s5 = sdgSign(50, sensorvalues.sensor5, 150);
    const s6 = sdgSign(50, sensorvalues.sensor6, 150);
    const sensorArray = [s1, s2, s3, s4, s5, s6];
    const currentPattern = sensorArray.join("");

    var faultPattern = [ "010001", "100100", "000100", "011111"];
    var faultMessage = [ "low flowrate", "low temperature", "low pressure", "low volume"];

  var ok /*found*/ = false;
   for( let i = 0; i< faultPattern.length; i++){
     if( !ok /*not found*/) {
       if( faultPattern[i] === currentPattern   ){ displayFaultMessage.current.innerHTML  = faultMessage[i];
        ok /*found*/= true;
         }
      }
   }
   if (!ok){displayFaultMessage.current.innerHTML  = " No fault detected!" ;}
};

  const handleReset = (event) => {
     setSensorValues({ sensor1: 100, sensor2: 100, sensor3: 100, sensor4: 100, sensor5: 100, sensor6: 100});
    displayFaultMessage.current.innerHTML = null;
  }
  return (
    <div  className= 'container con-box card'>
     <h1>steam boiler fault detection and diagnosis simulation panel</h1>

     <form className= ' form-wrapper d-flex' >

      <div className= 'progress-con'>
        <label className = "sliderLabel" htmlFor="slider1"  >Boiler Water Temp Sensor in &deg;C</label>
        <input type= 'range' name= 'sensor1' id= 'slider1' mim= {0} max= {200} value= {sensorvalues.sensor1} onChange= {handleSensorChange} />
        <div className= 'outcome'>
          <span className= 'badge bg-secondary' id= 'reading1'>{sensorvalues.sensor1} </span>
          <span  className= 'indicator ' id= 'indicator1' style= {{backgroundColor: (sensorvalues.sensor1 < 50)? 'yellow':
           ((sensorvalues.sensor1 >= 50 ) && (sensorvalues.sensor1 <= 150)) ? 'green': 'red' }  } > </span>
        </div>
      </div>

      <div className= 'progress-con'>
        <label className = "sliderLabel" htmlFor="slider2"  >Boiler Drum pressure Sensor in bar</label>
        <input type= 'range' name= 'sensor2' id= 'slider2' min= {0} max= {200} value= {sensorvalues.sensor2} onChange= {handleSensorChange} />
        <div className= 'outcome'>
          <span className= 'badge bg-secondary' id= 'reading2'>{sensorvalues.sensor2} </span>
          <span  className= 'indicator' id= 'indicator2' style= {{backgroundColor: (sensorvalues.sensor2 < 50)? 'yellow':
           ((sensorvalues.sensor2 >= 50 ) && (sensorvalues.sensor2 <= 150)) ? 'green': 'red' }}>  </span>
        </div>
      </div>

      <div className= 'progress-con'>
        <label className = "sliderLabel" htmlFor="slider3"  >Feed Water flowrate in m<sup>3</sup>/h</label>
        <input type= 'range' name= 'sensor3' id= 'slider3' mim= {0} max= {200} value= {sensorvalues.sensor3} onChange= {handleSensorChange} />
        <div className= 'outcome'>
          <span className= 'badge bg-secondary' id= 'reading3'>{sensorvalues.sensor3} </span>
          <span  className= 'indicator' id= 'indicator3' style= {{backgroundColor: (sensorvalues.sensor3 < 50)? 'yellow':
           ((sensorvalues.sensor3 >= 50 ) && (sensorvalues.sensor3 <= 150)) ? 'green': 'red' }}>  </span>
        </div>
      </div>

      <div className= 'progress-con'>
        <label className = "sliderLabel" htmlFor="slider4"  >Boiler water PH indicator Sensor</label>
        <input type= 'range' name= 'sensor4' id= 'slider4' mim= {0} max= {200} value= {sensorvalues.sensor4} onChange= {handleSensorChange} />
        <div className= 'outcome'>
          <span className= 'badge bg-secondary' id= 'reading4'>{sensorvalues.sensor4} </span>
          <span  className= 'indicator' id= 'indicator4' style= {{backgroundColor: (sensorvalues.sensor4 < 50)? 'yellow':
           ((sensorvalues.sensor4 >= 50 ) && (sensorvalues.sensor4 <= 150)) ? 'green': 'red' }}>   </span>
        </div>
      </div>

      <div className= 'progress-con'>
        <label className = "sliderLabel" htmlFor="slider5"  > Drum water Level Sensor in meters</label>
        <input type= 'range' name= 'sensor5' id= 'slider5' mim= {0} max= {200} value= {sensorvalues.sensor5} onChange= {handleSensorChange} />
        <div className= 'outcome'>
          <span className= 'badge bg-secondary' id= 'reading5'>{sensorvalues.sensor5} </span>
          <span  className= 'indicator' id= 'indicator5' style= {{backgroundColor: (sensorvalues.sensor5 < 50)? 'yellow':
           ((sensorvalues.sensor5 >= 50 ) && (sensorvalues.sensor5 <= 150)) ? 'green': 'red' }}> </span>
        </div>
      </div>

      <div className= 'progress-con'>
        <label className = "sliderLabel" htmlFor="slider6"  >Flue Gas Oxygen Sensor O<sub>2</sub> in ppm</label>
        <input type= 'range' name= 'sensor6' id= 'slider6' mim= {0} max= {200} value= {sensorvalues.sensor6} onChange= {handleSensorChange} />
        <div className= 'outcome'>
          <span className= 'badge bg-secondary' id= 'reading6'>{sensorvalues.sensor6} </span>
          <span  className= ' indicator' id= 'indicator6' style= {{backgroundColor: (sensorvalues.sensor6 < 50)? 'yellow':
           ((sensorvalues.sensor6 >= 50 ) && (sensorvalues.sensor6 <= 150)) ? 'green': 'red' }}>   </span>
        </div>
      </div>
      <div className= 'button-con' >
        <button className= 'btn btn-secondary' type= "reset" name="button1" onClick ={handleReset}>Reset Sensor</button>
        <button className= 'btn btn-danger' type= "submit" name="button2" onClick={handleSumit}>Run Test </button>
      </div>

    </form>

    <div className = 'fault' id= 'faultMessages' ref = {displayFaultMessage}>

    </div>
    </div>
  );
}

export default Sensor ;
