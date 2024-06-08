const setTime = () => {

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();

    let period = "";
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }

    if (hour == 0) {
        hour = 12;
    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    hour = update(hour);
    minute = update(minute);

    // Adding time elements to the div
    document.getElementById("clock").innerText = hour + ":" + minute + " " + period;
    setTimeout(setTime, 1000);
}

const update = (t) => {
    return t;
}

setTime();