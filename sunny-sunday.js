function sunnySunday(date) {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function isLeapYear(year) {
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                return year % 400 === 0;
            }
            return true;
        }
        return false;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    let totalDays = 0;

    for (let year = 1; year < date.getFullYear(); year++) {
        totalDays += daysInYear(year);
    }

    const daysInMonth = [31, isLeapYear(date.getFullYear()) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let month = 0; month < date.getMonth(); month++) {
        totalDays += daysInMonth[month];
    }
    totalDays += date.getDate() - 1;

    const sundaysSkipped = Math.floor(totalDays / 7);
    const adjustedDays = totalDays - sundaysSkipped;
    const weekdayIndex = adjustedDays % 6;

    return weekdays[weekdayIndex];
}

console.log(sunnySunday(new Date('0001-01-02')))

