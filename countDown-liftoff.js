/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var tSeconds = 60;

while (tSeconds >= 0){
  var countdown = "T-" + tSeconds + " seconds";
  if ((tSeconds <= 61) && (tSeconds >= 51)){
    console.log(countdown);
    tSeconds -= 1;
    
  }else if(tSeconds === 50){
    console.log("Orbiter transfers from ground to internal power");
     tSeconds -= 1;
     
  }else if((tSeconds <= 49) && (tSeconds >= 32)){
    console.log(countdown);
    tSeconds -= 1;
  }
    else if (tSeconds === 31){
    console.log("Ground launch sequencer is go for auto sequence start");
     tSeconds -= 1;
     
  }else if((tSeconds <= 30) && (tSeconds >= 17)){
    console.log(countdown);
    tSeconds -= 1;
  }
  
  else if (tSeconds === 16){
    console.log("Activate launch pad sound suppression system");
     tSeconds -= 1;
  }else if ((tSeconds <= 15) && (tSeconds >= 11)) {
    console.log(countdown);
    tSeconds -= 1;
  }
  
  else if (tSeconds === 10){
    console.log("Activate main engine hydrogen burnoff system");
     tSeconds -= 1;
  }else if((tSeconds <= 9) && (tSeconds >= 7)){
    console.log(countdown);
    tSeconds -= 1;
  }
  
  else if (tSeconds === 6){
    console.log("Main engine start");
     tSeconds -= 1;
  }
  else if((tSeconds <= 5) && (tSeconds >= 1)){
    console.log(countdown);
    tSeconds -= 1;
  }
  
  else if(tSeconds === 0){
    console.log("Solid rocket booster ignition and liftoff!");{break;}
    
  } 
     
  
   
  
 
}
