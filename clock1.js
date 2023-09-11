// clock.js
function showDateAndTime(){
    document.getElementById('show_date_and_time').innerHTML = Date();
}

var i = setInterval(showDateAndTime, 1000);

function clearDateInterval(){
    clearInterval(i);
}
setTimeout(clearDateInterval, 5000);// setTimeout(showDate, 1000 ) only calls function once



function showClock(){
    var todayDate = new Date();
    var hour = todayDate.getHours()<10? '0'+ todayDate.getHours(): todayDate.getHours();
    var minute = todayDate.getMinutes()<10? '0'+ todayDate.getMinutes(): todayDate.getMinutes();
    var seconds = todayDate.getSeconds()<10? '0'+ todayDate.getSeconds(): todayDate.getSeconds();
    document.getElementById('show_clock').innerHTML = hour + ":" + minute + ":" + seconds;
}

setInterval(showClock, 1000);


