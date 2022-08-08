

export const createTimeSlotArray = () => {
    //https://stackoverflow.com/questions/36125038/generate-array-of-times-as-strings-for-every-x-minutes-in-javascript
    var x = 30; //minutes interval
    var times = []; // time array
    var tt = 0; // start time
    var ap = [' AM', ' PM']; // AM-PM

    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
        var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
        var mm = (tt % 60); // getting minutes of the hour in 0-55 format
        times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
        tt = tt + x;
    }

    return times;
};


export const setDateTime = (date, time) => {
    https://stackoverflow.com/questions/16382266/javascript-set-time-string-to-date-object
    var index = time.indexOf(":"); // replace with ":" for differently displayed time.
    var index2 = time.indexOf(" ");

    var hours = time.substring(0, index);
    var minutes = time.substring(index + 1, index2);

    var mer = time.substring(index2 + 1, time.length);
    if (mer == "PM") {
        hours = hours + 12;
    }

    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds("00");

    return date;
};


export const areDatesEqual = (start, end) => {
    return (
        start.getFullYear() === end.getFullYear() &&
        start.getMonth() === end.getMonth() &&
        start.getDate() === end.getDate()
    );
};