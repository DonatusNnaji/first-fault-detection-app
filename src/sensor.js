import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sensor.css';
import RangeSlider from './componets/slidercomponents.js';

const sliderDatas = [
{postfixId: 1, slidertitle: "Boiler Water Temp Sensor in &deg;C"},
{postfixId: 2, slidertitle: "Boiler Drum pressure Sensor in bar"},
{postfixId: 3, slidertitle: "Feed Water flowrate in m"},
{postfixId: 4, slidertitle: "Boiler water PH indicator Sensor"},
{postfixId: 5, slidertitle: "Drum water Level Sensor in meters"},
{postfixId: 6, slidertitle: "Flue Gas Oxygen Sensor O<sub>2</sub> in ppm"}]


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
  const sliderlist = sliderDatas.map( (sliderdata) =>
    (< RangeSlider postfixId= {sliderdata.postfixId} slidertitle= {sliderdata.slidertitle} handleSensorChange= {handleSensorChange} sensorvalues= {sensorvalues}/>)

);
  return (
    <div  className= 'container con-box card'>
     <h1>steam boiler fault detection and diagnosis simulation panel</h1>

     <form className= ' form-wrapper d-flex' >

      <>{sliderlist}</>
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
