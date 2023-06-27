let birthday = prompt('Input date of your birthday');

if (confirm(birthday)) {
    alert("You were born in "+ birthday +"");
}
else {
    alert ("Too bad you didn\'t want to enter your birthday");
}

let plOfBirth = prompt('Input place of your birthday');

if (confirm(plOfBirth)) {
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
else {
    alert ("Too bad you didn\'t want to enter your place of birth");
}

let result = "Your age: "+ birthday +"\nYou live in "+ plOfBirth +"\n";
alert(result);

let sport = prompt('Input your favourite sport');

if (confirm(sport)) {
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
else {
    alert ("Too bad you didn\'t want to enter your favourite sport");
}


