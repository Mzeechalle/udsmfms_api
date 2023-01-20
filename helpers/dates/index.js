//function to calculate the age
exports.calculateAge = date => {

    return new Date().getFullYear() - new Date(date).getFullYear();

}

/*
example usage ("MM-DD-YYYY")
console.log(calculateAge("02-12-2020"));
*/

//function to get the day
const getDayName = date => {

    var day;

    switch(new Date(date).getDay()){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }

    return day;

}

/*
    example usage (MM-DD-YYYY)
    console.log(getDay("03-20-2021"));
*/

//function to get the month
const getMonthName = date => {

    var month;

    switch(new Date(date).getMonth()){
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Febr";
            break;
        case 2:
            month = "Mar";
            break;
        case 3:
            month = "Apr";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "Jun";
            break;
        case 6:
            month = "Jul";
            break;
        case 7:
            month = "Aug";
            break;
        case 8:
            month = "Sept";
            break;
        case 9:
            month = "Oct";
            break;
        case 10:
            month = "Nov";
            break;
        case 11:
            month = "Dec";
            break;
    }

    return month;

}

/*
    example usage (MM-DD-YYYY)
    console.log(getMonth("01-12-2010"));
*/

//function to show actual date
exports.showDate = (date) => {
    return `${getDayName(date)} ${getMonthName(date)} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`;
}

//function to show actual time in AM/PM
exports.formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
};


/*
    example usage (MM-DD-YYYY)
    console.log(showDate("01-12-2010"));
*/

//function to calculate difference in days between two dates
exports.getNumberOfDaysBtnDates = (date1, date2) => {
    return Math.ceil( Math.abs(date2 - date1) / (1000 * 60 * 60 * 24) );
};

//console.log(getNumberOfDaysBtnDates(new Date("04-01-2022"), new Date("05-03-2022")));

//console.log(formatAMPM(new Date(Date.now())));