const date = document.getElementById('currentDate')
const time = document.getElementById('currentTime')
const today = new Date()
let month= today.getMonth() + 1;
let year = today.getFullYear();
let day = today.getDate();
 let currentDate = `${month}/${day}/${year}`;
 date.innerText = currentDate;
 let UTChour = addZero(today.getUTCHours())
 let UTCmin =addZero(today.getUTCMinutes()) 
 let UTCsec = addZero(today.getSeconds())
 let currentTime = `${UTCsec}sec:${UTCmin}min:${UTChour}hour`
 time.innerText = currentTime
 function addZero(num){
    return num < 10 ? `0${num}` : num;
 }