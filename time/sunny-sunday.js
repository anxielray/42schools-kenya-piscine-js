function sunnySunday(date) {
    const referenceDate = new Date(1, 0, 1);
    const deltaDays = Math.floor((date - referenceDate) / (1000 * 60 * 60 * 24));
    const weekdayIndex = ((deltaDays % 6) + 6) % 6;
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[weekdayIndex];
}
