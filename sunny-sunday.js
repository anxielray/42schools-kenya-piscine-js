function sunnySunday(date) {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const referenceDate = new Date(1, 0, 1);
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const diffInDays = Math.floor((date - referenceDate) / millisecondsPerDay);
    const sundaysSkipped = Math.floor(diffInDays / 7);
    const adjustedDays = diffInDays - sundaysSkipped;
    const weekdayIndex = adjustedDays % 6;
    return weekdays[weekdayIndex];
}
