
function getCurrentDate(){
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var milliSeconds = currentDate.getMilliseconds();


    var current_date = date +' - '+ (month+1) +' - '+ year;
    document.getElementById('date').innerText = current_date;

    document.getElementById('hours').innerText = hours+' Hours';
    document.getElementById('minutes').innerText = minutes+" Minutes";
    document.getElementById('seconds').innerText = seconds+" Seconds";
    document.getElementById('milliseconds').innerText = milliSeconds+" MilliSeconds";
}

getCurrentDate();

// setTimeout(getCurrentDate,3000);
// setInterval(getCurrentDate, 1000);

var i;

function startTimeOut(){
    i = setTimeout(getCurrentDate,3000);
}

function stopTimeOut(){
    clearTimeout(i);
}

function startInterval(){
    i = setInterval(getCurrentDate,1000);
}

function stopInterval(){
    clearInterval(i);
}