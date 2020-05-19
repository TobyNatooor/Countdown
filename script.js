
window.onload = function () {

    let declareArray = ["#Title", "#Month", "#Day", "#Year", "#Hour", "#Minute", "#Second", "#Start"]
    for (i = 0; i < declareArray; i++) {
        document.querySelector(declareArray[i])
    }
    let arrayMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    for (i = 0; i < arrayMonth.length; i++) {
        Month.innerHTML += "<option>" + arrayMonth[i] + "</option>";
    }
    let optionArray = [[Day, 31, 1], [Year, 2100, 2020], [Hour, 24, 0], [Minute, 60, 0], [Second, 60, 0]]
    for (i = 0; i < optionArray.length; i++) {
        for (x = optionArray[i][2]; x < optionArray[i][1]; x++) {
            optionArray[i][0].innerHTML += "<option>" + x + "</option>";
        }
    }

    let countdownDate;
    let startCountdown = setInterval(displayCountdown, 1000)
    let xyz = 0;
    function displayCountdown() {
        if (xyz > 0) {
            let theTime = new Date();
            let Birthday = new Date(countdownDate);
            let theCountdown = document.getElementById("theCountdown");
            let second = ((Birthday.getTime() - theTime.getTime()) / 1000).toFixed(0);
            let minute = (second / 60).toFixed(0);
            let hour = (minute / 60).toFixed(0);
            let day = (hour / 24).toFixed(0);
            theCountdown.innerHTML =
                day + ':' +
                (hour % 24) + ':' +
                (minute % 60) + ':' +
                (second % 60);
        }
    }

    Start.addEventListener('click', () => {
        xyz = 1;
        countdownDate =
            Month.options[Month.selectedIndex].value + " " +
            Day.options[Day.selectedIndex].value + ", " +
            Year.options[Year.selectedIndex].value + " " +
            Hour.options[Hour.selectedIndex].value + ":" +
            Minute.options[Minute.selectedIndex].value + ":" +
            Second.options[Second.selectedIndex].value;
        startCountdown = setInterval(displayCountdown, 1000)
    })
    document.querySelector("#stopCountdown").addEventListener('click', function () {
        clearInterval(startCountdown);
        theCountdown.innerHTML = '0:0:0';
        xyz = 0;
    });
}