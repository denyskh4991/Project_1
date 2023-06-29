let birthday = prompt('Input date of your birthday');

if (!birthday){
    alert ("Too bad you didn\'t want to enter your birthday");
}
else if (confirm(birthday)){
    alert("You were born in "+ birthday +"");
}

let plOfBirth = prompt('Input place of your birthday');

if (!plOfBirth){
    alert ("Too bad you didn\'t want to enter your place of birth");
}
else if (confirm(plOfBirth)) {
    switch (plOfBirth) {
        case 'Kiev':
            alert('You live in capital of Ukraine');
            break;
        case 'London':
            alert('You live in capital of UK');
            break;
        case 'Washington':
            alert('You live in capital of the USA')
            break;
        default:
            alert("You live in city (town) "+ plOfBirth +"");
    }
}

let sport = prompt('Input your favourite sport');

if (!sport) {
    alert ("Too bad you didn\'t want to enter your favourite sport");
}
else if (confirm(sport)) {
    switch (sport) {
        case 'boxing':
            alert('Cool! Do you want to be Mike Tyson?');
            break;
        case 'swimming':
            alert('Cool! Do you want to be Michael Phelps?');
            break;
        case 'tennis':
            alert('Cool! Do you want to be Roger Federer')
            break;
        default:
            alert("You\'re doing "+ sport +"");
    }
}

if(!birthday && !plOfBirth && !sport){
    alert("Your age: undefined\nYou live in undefined\nYou\'re doing undefined");
}
else {
    alert("Your age: "+ birthday +"\nYou live in "+ plOfBirth +"\nYou\'re doing "+ sport +"");
}


