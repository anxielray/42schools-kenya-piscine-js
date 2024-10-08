function dayOfTheYear(date) {
	let day = new Date(date).getTime();
	let begin = new Date(`${date.getFullYear()}-01-01`).getTime();
	return (day - begin)/(1000*60*60*24);
}

function isFirstMonthDay(date) {
	return new Date(date).getDate() === 1 && new Date(date).getMonth() === 0;
}

console.log(dayOfTheYear(new Date('2024-01-31')));
