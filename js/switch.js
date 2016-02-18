// Switch allow to preset a number of options (case)
// Checks expression to see if matches any of the cases
// If matches, performs action to the case
// If no matches, execute default option

var lunch = prompt("What do you want for lunch?","Type your lunch choice here").toLowerCase(); // Added toLowerCase to deal with user response

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
