function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}

function dayOfTheYear(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let dayOfYear = 0;
    for (let i = 0; i < month - 1; i++) {
        dayOfYear += daysInMonth[i];
    }
    dayOfYear += day;

    return dayOfYear;
}
const date1 = new Date('0001-12-31');
console.log(dayOfTheYear(date1));

const date2 = new Date('2020-12-31');
console.log(dayOfTheYear(date2));

