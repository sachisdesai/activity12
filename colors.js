//creating and iterating through a list 
function getChoices() {
    const topColors = ['blue', 'green', 'brown', 'black', 'white']
    for (let i = 0; i < 5; i++) {
        var suffix = '';
        if (i == 0) {
            suffix = 'st';
        } else if (i == 1) {
            suffix = 'nd';
        } else if (i == 2) {
            suffix = 'rd';
        } else {
            suffix = 'th';
        }
        console.log('My ' + (i + 1) + suffix + ' choice is ' + topColors[i]);
    }
}

getChoices()
