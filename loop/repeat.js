//function to take a string and a number and repeat the string the number of time the number describes without using the .repeat 
function repeat(string, number){
    let result = '';
    for(let i = 0; i < number; i++){
        result += string;
    }
    return result;
}
console.log(typeof repeat === 'function');