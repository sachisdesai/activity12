function halfNumber(num) {
    var half = num/2;
    console.log('The result of halving the number ' + num + ' is ' + half); 
    return half;
}

var input = prompt("Enter a number to use");
var answer = halfNumber(input);
document.write('HTML: The result of halving the number ' + input + ' is ' + answer);
document.write('\n');