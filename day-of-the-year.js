function dayOfTheYear(date) {
	let dys = 1;
	while(!isFirstMonthDay(date)) {
		new Date(date).setDate(date.getDate() - 1);
		dys++;
	}
	return dys++;
}

function isFirstMonthDay(date) {
	return new Date(date).getDate() === 1 && new Date(date).getMonth() === 0;
}

console.log(dayOfTheYear(new Date('2024-01-31')));
