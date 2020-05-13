
//"May 15, 2020 12:34:00"

window.onload = function () {
6
    setInterval(function () {
        let theTime = new Date();
        let Birthday = new Date("May 13, 2020 12:34:00");
        let theCountdown = document.getElementById("theCountdown");
        let second = ((Birthday.getTime() - theTime.getTime()) / 1000).toFixed(0);
        let minute = (second / 60).toFixed(0);
        let hour = (second / 3600).toFixed(0);
        theCountdown.innerHTML = hour + ':' + minute % 60 + ':' + (second % 60);

        let end = document.getElementById("end");
        if (second == 0 && minute == 0 && hour == 0) {
            end.innerHTML = "my birthdayyyyy"
        }
    }, 1000)
}