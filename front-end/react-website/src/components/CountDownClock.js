//Count down clock
   import React, {useState, useEffect} from 'react'
   import './CountDownClock.css'
   
   export default function CountDownClock() {

    var countDownDate = new Date("Nov 6, 2026 17:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState("");

    // const [distance, setDistance] = useState();

    var x = setInterval(function() {

    var outputString = "";

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(days != 0 ){
    outputString += `${days}d `;
  }
  if(hours != 0){
    outputString += `${hours}h `;
  }
  if(minutes != 0){
    outputString += `${minutes}m `;
  }
  if(seconds > 0){
    outputString += `${seconds}s`;
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    setTimeLeft("Cougar Jam will return next year!");
  }else{
    setTimeLeft(outputString);
  }
}, 1000);

     return (
       <div>
         <h4 className='CountDown'>{timeLeft}</h4>
       </div>
     )
   }
   