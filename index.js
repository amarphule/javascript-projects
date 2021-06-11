window.onload = function () {
    setInterval(showTime, 1000)

    // When using setTimeout() call showTime()
    // showTime()
}

function showTime() {
    let digitalClock = document.getElementById('digitalClock');

    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let timeStamp = "AM"


    if (hrs == 0) {
        hrs = 12
    }
    if (hrs > 12) {
        hrs = hrs - 12
        timeStamp = "PM"
    }

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    digitalClock.innerHTML = hrs + ":" + min + ":" + sec + " " + timeStamp;

    // setTimeout(showTime, 1000)
}