
//"May 15, 2020 12:34:00"

window.onload = function () {

    setInterval(function () {
        let theTime = new Date();
        let Birthday = new Date("May 13, 2020 12:34:00");
        let theCountdown = document.getElementById("theCountdown");
        let second = ((Birthday.getTime() - theTime.getTime()) / 1000).toFixed(0);
        console.log(second)
        let minute = (second / 60).toFixed(0);
        console.log(minute)
        let hour = (second / 3600).toFixed(0);
        console.log(hour)
        theCountdown.innerHTML = hour + ':' + minute % 60 + ':' + (second % 60);

    }, 1000)
}