function sunnySunday(date) {
    let dayOfYear = (date.getFullYear() - 1) * 365 + date.getDate() - 1;
    let dayOfWeek = dayOfYear % 6;

    let weekdayStrings = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdayStrings[dayOfWeek];
}
console.log(sunnySunday(new Date('0001-01-07')))

