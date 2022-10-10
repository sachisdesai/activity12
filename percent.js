function percentOf(x, y) {
    var percent = (x/y)*100;
    console.log('The number ' + x + ' is ' + percent + '% of ' + y); 
    return percent;
}

var a = prompt("Enter a number to use");
var b = prompt("Enter another number to use");
document.writeln('HTML: The number ' + a + ' is ' + percentOf(a,b) + '% of ' + b);