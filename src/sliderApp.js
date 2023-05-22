import React, {useState} from 'react';
import Slider from './slider';
function SliderApp() {
  return (
    <div class="panel">
      <h1>steam boiler fault detection and diagnosis panel</h1>
      <form class="slidForm" >
        < Slider sliderunits= 'temperature' id= 'id1'/>
        < Slider sliderunits= 'volume' id= 'id2'/>
        < Slider sliderunits= 'pressure' id= 'id3'/>
        < Slider sliderunits= 'temp1' id= 'id4'/>
        < Slider sliderunits= 'press2' id= 'id5'/>
        < Slider sliderunits = 'volume1' id= 'id6'/>
        <div class="btn-wrapper">
          <input type = 'reset' name = 'resetBtn' id = 'resetBtn'  value = 'Reset Slider'/>
          <input type = 'submit' name = 'submitBtn' id = 'submitBtn' value = 'Run Test' />
        </div>
      </form>
      <div className="fault">
        <h2>fault Message</h2>
      </div>
    </div>

  );

}

export default SliderApp ;
