
//"May 15, 2020 12:34:00"

window.onload = function () {

    let declareArray = ["#Title", "#Month", "#Day", "#Year", "#Hour", "#Minute", "#Second", "Start"]
    for (i = 0; i < declareArray; i++) {
        document.querySelector(declareArray[i])
    }
    let arrayMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    for (i = 0; i < arrayMonth.length; i++) {
        Month.innerHTML += "<option>" + arrayMonth[i] + "</option>";
    }
    for (i = 1; i < 32; i++) {
        Day.innerHTML += "<option>" + i + "</option>";
    }
    for (i = 2020; i < 2100; i++) {
        Year.innerHTML += "<option>" + i + "</option>";
    }
    for (i = 0; i < 24; i++) {
        Hour.innerHTML += "<option>" + i + "</option>";
    }
    for (i = 0; i < 60; i++) {
        Minute.innerHTML += "<option>" + i + "</option>";
    }
    for (i = 0; i < 60; i++) {
        Second.innerHTML += "<option>" + i + "</option>";
    }

    Start.addEventListener('click', function () {
        let countdownDate =
        Month.options[Month.selectedIndex].value + " " +
        Day.options[Day.selectedIndex].value + ", " +
        Year.options[Year.selectedIndex].value + " " +
        Hour.options[Hour.selectedIndex].value + ":" +
        Minute.options[Minute.selectedIndex].value + ":" +
        Second.options[Second.selectedIndex].value;

        console.log(countdownDate);

        setInterval(function () {
            let theTime = new Date();
            let Birthday = new Date(countdownDate);
            let theCountdown = document.getElementById("theCountdown");
            let second = ((Birthday.getTime() - theTime.getTime()) / 1000).toFixed(0);
            let minute = (second / 60).toFixed(0);
            let hour = (second / 3600).toFixed(0);
            theCountdown.innerHTML = hour + ':' + minute % 60 + ':' + (second % 60);
        }, 1000)
    })
}