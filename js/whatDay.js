// Added toLowerCase to deal with user response
// Figured out I could use || and not a comma to have multiple cases with same action

var answer = prompt("What day is today?").toLowerCase();

switch(answer) {
  case 'monday' || 'tuesday':
    console.log("Hang in there!");
    break;
  case 'wednesday':
    console.log("Hump Day!");
    break;
  case 'thursday' || 'friday':
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("WEEKEND!!");
    break;
}
