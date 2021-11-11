const stopWatchTag= document.getElementsByClassName("stopWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const stopButtonTag = document.getElementsByClassName("stopButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let seconds= 0, minutes=0, hours=0, milli= 0;
const startTime= () => {
    milli += 10;
    if(milli === 1000){
        milli=0;
        seconds += 1;
    if(seconds === 60){
        seconds=0;
        minutes +=1;
    if(minutes === 60){
        minutes= 0;
        hours += 1;
    }
    }
    }  
const milliText = milli< 10 ? "0"+ milli.toString() : milli;
const secondText = seconds< 10 ? "0"+ seconds.toString() : seconds;
const minuteText =minutes< 10 ? "0"+ minutes.toString() : minutes;
const hourText =hours< 10 ? "0"+ hours.toString() : hours;
    stopWatchTag.textContent= hourText + ":" + minuteText+ ":"+ secondText + "." + milliText;
};
let millione;
let intervalId;
startButtonTag.addEventListener("click", ()=> {
   intervalId= setInterval(startTime,10);
});

stopButtonTag.addEventListener("click", ()=> {
    clearInterval(intervalId);
});
continueButtonTag.addEventListener("click", ()=> {
    clearInterval(intervalId);
    intervalId= setInterval(startTime, 10);
 });
 
 restartButtonTag.addEventListener("click", ()=> {
    clearInterval(intervalId);
    seconds= 0, minutes=0, hours=0, milli=0;
    intervalId= setInterval(startTime,10);
 });
// const milliText = milliseconds< 10 ? "0"+ milliseconds.toString() : milliseconds;
//milliWatchTag.textContent= milliText
//   milliseconds += 10;
//if(milliseconds === 1000){milliseconds=0;seconds= 1;
//const milliWatchTag= document.getElementsByClassName("milliWatch")[0];