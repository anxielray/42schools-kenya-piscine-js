function countLeapYears(date){
let yrs = 0;
for (let i = 1; i < new Date(date).getFullYear(); i++){

if ( i % 4 === 0 && (i % 100!== 0 || i % 400 === 0)) {
yrs++;
}

}
return yrs;
}

console.log(countLeapYears('1664-08-04'));
