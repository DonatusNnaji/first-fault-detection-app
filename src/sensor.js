import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sensor.css';

function Sensor () {
  const [sensorvalues, setSensorValues] = useState({
    sensor1: 100, sensor2: 100, sensor3: 100, sensor4: 100, sensor5: 100, sensor6: 100
  });
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

    const sensorArray = [];
    const s1 = sdgSign(50, sensorvalues.sensor1, 150);
    sensorArray.push(s1);
    const s2 = sdgSign(50, sensorvalues.sensor2, 150);
    sensorArray.push(s2);
    const s3 = sdgSign(50, sensorvalues.sensor3, 150);
    sensorArray.push(s3);
    const s4 = sdgSign(50, sensorvalues.sensor4, 150);
    sensorArray.push(s4);
    const s5 = sdgSign(50, sensorvalues.sensor5, 150);
    sensorArray.push(s5);
    const s6 = sdgSign(50, sensorvalues.sensor6, 150);
    sensorArray.push(s6);

    const currentPattern = sensorArray.join("");

    var faultPattern = [ "010001", "100100", "000100", "011111"];
    var faultMessage = [ "low flowrate", "low temperature", "low pressure", "low volume"];

  var ok = false;
   for( var i = 0; i< faultPattern.length; i++){
     if( !ok) {
       if(currentPattern === faultPattern[i]){  document.getElementById('faultMessages').innerHTML = faultMessage[i];

        ok = true;
         }
      }
   }
   if (!ok){document.getElementById('faultMessages').innerHTML = " No fault detected!" ;}

};

  const handleReset = (event) => {
     setSensorValues({ sensor1: 100, sensor2: 100, sensor3: 100, sensor4: 100, sensor5: 100, sensor6: 100});
    document.getElementById('faultMessages').innerHTML ='fault message';
  }
  return (
    <div  className= 'container con-box card'>
     <h1>steam boiler fault detection and diagnosis panel</h1>

     <form className= ' form-wrapper d-flex' >

      <div className= 'progress-con'>
        <label className = "sliderLabel" htmlFor="slider1"  >sliderA</label>
        <input type= 'range' name= 'sensor1' id= 'slider1' mim= {0} max= {200} value= {sensorvalues.sensor1} onChange= {handleSensorChange} />
        <div className= 'outcome'>
          <span className= 'badge bg-secondary' id= 'reading1'>{sensorvalues.sensor1} </span>
          <span  className= 'indicator ' id= 'indicator1' /*style= {`{backgroudColor: ( ${ sensorvalues.sensor1} < 100)? 'yellow':
           ( ${ sensorvalues.sensor1} == 100) ? 'green': 'red' ;}`}*/> </span>
        </div>
      </div>

      <div className= 'progress-con'>
        <label className = "sliderLabe2" htmlFor="slider2"  > sliderB</label>
        <input type= 'range' name= 'sensor2' id= 'slider2' min= {0} max= {200} value= {sensorvalues.sensor2} onChange= {handleSensorChange} />
        <div className= 'outcome'>
          <span className= 'badge bg-secondary' id= 'reading2'>{sensorvalues.sensor2} </span>
          <span  className= 'indicator' id= 'indicator2' /*style= {`{backgroudColor: ( ${ sensorvalues.sensor2}< 100)? 'yellow':
           ( ${ sensorvalues.sensor2} == 100)? 'green': 'red' ;}`}*/>  </span>
        </div>
      </div>

      <div className= 'progress-con'>
        <label className = "sliderLabe3" htmlFor="slider3"  >sliderC</label>
        <input type= 'range' name= 'sensor3' id= 'slider3' mim= {0} max= {200} value= {sensorvalues.sensor3} onChange= {handleSensorChange} />
        <div className= 'outcome'>
          <span className= 'badge bg-secondary' id= 'reading3'>{sensorvalues.sensor3} </span>
          <span  className= 'indicator' id= 'indicator3'/* style= {`{backgroudColor: ( ${ sensorvalues.sensor3} < 100)? 'yellow':
           ( ${ sensorvalues.sensor3} == 100) ? 'green': 'red' ;}`}*/>  </span>
        </div>
      </div>

      <div className= 'progress-con'>
        <label className = "sliderLabe4" htmlFor="slider4"  >sliderD</label>
        <input type= 'range' name= 'sensor4' id= 'slider4' mim= {0} max= {200} value= {sensorvalues.sensor4} onChange= {handleSensorChange} />
        <div className= 'outcome'>
          <span className= 'badge bg-secondary' id= 'reading4'>{sensorvalues.sensor4} </span>
          <span  className= 'indicator' id= 'indicator4' /*style= {`{backgroudColor: ( ${ sensorvalues.sensor4} < 100)? 'yellow':
           ( ${ sensorvalues.sensor4} == 100) ? 'green': 'red' ;}`}*/>   </span>
        </div>
      </div>

      <div className= 'progress-con'>
        <label className = "sliderLabe5" htmlFor="slider5"  >sliderE</label>
        <input type= 'range' name= 'sensor5' id= 'slider5' mim= {0} max= {200} value= {sensorvalues.sensor5} onChange= {handleSensorChange} />
        <div className= 'outcome'>
          <span className= 'badge bg-secondary' id= 'reading5'>{sensorvalues.sensor5} </span>
          <span  className= 'indicator' id= 'indicator5' /*style= {`{backgroudColor: ( ${ sensorvalues.sensor5} < 100)? 'yellow':
           ( ${ sensorvalues.sensor5} == 100) ? 'green': 'red' ;}`}*/> </span>
        </div>
      </div>

      <div className= 'progress-con'>
        <label className = "sliderLabe6" htmlFor="slider6"  >sliderE</label>
        <input type= 'range' name= 'sensor6' id= 'slider6' mim= {0} max= {200} value= {sensorvalues.sensor6} onChange= {handleSensorChange} />
        <div className= 'outcome'>
          <span className= 'badge bg-secondary' id= 'reading6'>{sensorvalues.sensor6} </span>
          <span  className= ' indicator' id= 'indicator6'/* style= {`{backgroudColor: ( ${ sensorvalues.sensor6} < 100)? 'yellow':
           ( ${ sensorvalues.sensor6} == 100) ? 'green': 'red' ;}`}*/>   </span>
        </div>
      </div>
      <div className= 'button-con' >
        <button className= 'btn btn-secondary' type= "reset" name="button1" onClick ={handleReset}>Reset Slider</button>
        <button className= 'btn btn-danger' type= "submit" name="button2" onClick={handleSumit}>Run Test </button>
      </div>

    </form>

    <div className = 'fault' id= 'faultMessages'>
          fault Message
    </div>
    </div>

  );
}

export default Sensor ;