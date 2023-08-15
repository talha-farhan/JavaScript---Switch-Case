let day = 1;
switch (day) {
    case 1:
        document.write("Monday");
    break;

    case 2:
        document.write("Tuesday");
    break;

    case 3:
        document.write("Wednesday");
    break;

    case 4:
        document.write("Thursday");
    break;

    case 5:
        document.write("Friday");
    break;

    case 6:
        document.write("Saturday");
    break;

    case 7:
        document.write("Sunday");
    break;
    //Break is used to stop checking the remaining conditions
    //If a break is removed, the switch case will start checking the next conditions too

    case 8:
        document.write("Sunday"); //Multiple cases can have the same value
    break;

    default:
    document.write("Enter a valid day of the week!");
}

let team = prompt("Enter a team's ranking from 1-10");
team = parseInt(team);
// The switch case is very strict on the input type and the data type in the prompt
// Since our default value is an integer, switch statement doesn't run an integral value
// parseInt is used therefore

switch (team) {
    case 1:
        console.log("India");
    break;

    case 2:
        console.log("Australia");
    break;

    case 3:
        console.log("England");
    break;

    case 4:
        console.log("South Africa");
    break;

    case 5:
        console.log("New Zealand");
    break;

    case 6:
        console.log("Pakistan");
    break;

    case 7:
        console.log("Sri Lanka");
    break;

    case 8:
        console.log("West Indies");
    break;

    case 9:
        console.log("Bangladesh");
    break;

    case 10:
        console.log("Zimbabwe");
    break;

    default:
        console.log("Enter a team's ranking from 1-10");
}
