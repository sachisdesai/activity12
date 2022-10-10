function assignGrade(score) {
    var grade;
    if (score < 60) {
        grade = 'F';
    } else if (score < 70) {
        grade = 'D';
    } else if (score < 80) {
        grade = 'C';
    } else if (score < 90) {
        grade = 'B';
    } else {
        grade = 'A';
    }
    return grade;
}

console.log("For " + 51 + ", you got a " + assignGrade(51));
console.log("For " + 93 + ", you got a " + assignGrade(93));
document.writeln('HTML: The resulting grade for a score of ' + input + ' is ' + assignGrade(input));
        
//iterate on assignGrade for scores 60 through 100
for (i = 60; i < 101; i++) {
    console.log("For " + i + ", you got a " + assignGrade(i));
}