function squarenumber(num) {
    var square = num*num;
    console.log('The result of squaring the number ' + num + ' is ' + square); 
    return square;
}

var input = prompt("Enter a number to use");
var answer = squarenumber(input)
document.writeln('HTML: The result of squaring the number ' + input + ' is ' + answer);