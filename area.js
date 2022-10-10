function areaOfCircle(r) {
    var area = Math.PI*r*r;
    console.log('The area for a circle with radius ' + r + 
        ' is ' + area);
    return area;
}

var input = prompt("Enter a number to use");
document.writeln('HTML: The result of squaring the number ' + input + ' is ' + areaOfCircle(input));
       