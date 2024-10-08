function sunnySunday(date) {
    let dayOfWeek = date.getDay();

    if (dayOfWeek === 0) {
        date.setDate(date.getDate() + 1);
        dayOfWeek = 1;
    }

    let weekdayStrings = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdayStrings[dayOfWeek];
}
