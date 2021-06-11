window.onload = function () {
    // Accessed with Variables
    let seconds = 0;
    let tens = 0;
    let appendTens = document.getElementById('tens');
    let appendSeconds = document.getElementById('seconds');
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    let Interval;

    // Click functions
    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(run, 10)
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00"
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }


    function run() {
        tens++

        appendTens.innerHTML = (tens <= 9) ? ('0' + tens) : tens
        // if (tens <= 9) {
        //     appendTens.innerHTML = '0' + tens;
        // }
        // if (tens > 9) {
        //     appendTens.innerHTML = tens;
        // }
        if (tens > 99) {
            seconds++
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0
            appendTens.innerHTML = '0' + tens
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds
        }
    }
}