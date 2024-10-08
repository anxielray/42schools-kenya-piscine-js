function dayOfTheYear(date) {
	let dys = 1;
	while(!isFirstMonthDay(date)) {
		new Date(date).setDate(date.getDate() - 1);
		dys++;
	}
	return dys++;
}

function isFirstMonthDay(new Date(date)) {
	return new Date(date).getDay() === 1 && new Date(date).getMonth() === 0;
}
