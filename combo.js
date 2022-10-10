function combo(num) {
    var half = halfNumber(num);
    var square = squarenumber(half);
    var area = areaOfCircle(square);
    return area;
}

var input = prompt("Enter a number to use");
document.writeln('HTML: The result of combining these operations on ' + input + ' is ' + combo(input));