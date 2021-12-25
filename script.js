function clock() {
    let time = new Date();
    let hrs = time.getHours(); 
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am = "AM"

    if (hrs > 12) {
        am = "PM"
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    
    if (hrs < 10){
        hrs = "0" + hrs
    }

    if (min < 10){
        min = "0" + min
    }

    if (hrs == 0) {
        hrs = 12;
    }
    
    document.getElementById("time").innerHTML = hrs + ":" + min + ":" + sec + " " + am

}

setInterval(clock, 500);
