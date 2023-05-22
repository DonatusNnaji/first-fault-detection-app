function sign (min, val, max){
  return (val < min) ?
    "1"
        : ((val >= min) && (val <= max)) ?
    "0"
        : "1"
}

var pattern = [];
var s1 = sign(2, 3, 10);
pattern.push(s1);
var s2 = sign(2,6, 10);
pattern.push(s2);
var s3 = sign(2, 4, 10);
pattern.push(s3);
var s4 = sign(2, 11, 10);
pattern.push(s4);
var s5 = sign(2, 9, 10);
pattern.push(s5);
var s6 = sign(2, 4, 10);
pattern.push(s6);
console.log(pattern);
var currentpattern = pattern.join("");
console.log(currentpattern);


 function  myMatchpattrn () {
  //var  currentpattern = "010001";
  var faultpattern = [ "010001", "100100", "000100", "011111", "010001"];
  var faultmessage = [ "low flowrate", "low temperature", "low pressure", "low volume"];
   var ok = false;
  for( var i = 0; i< faultpattern.length; i++){
    if( !ok) {
     if(currentpattern === faultpattern[i]){
       console.log( faultmessage[i]);
       console.log( faultpattern[i]);
       ok = true;
       }
    }
  }
    if (!ok)  {console.log( " no fault detected!");}

};

export default myMatchpattrn(); 
