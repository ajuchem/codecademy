// Dragon slaying mini game
// Takes 4 hits to slay the dragon

var slaying = true;
var youHit = Math.floor(Math.random() * 2); // Sets a random number that's either 0 (false) or 1 (true)
var damageThisRound = Math.floor(Math.random() * 5 + 1);  // See below
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound; // Add totalDamage and damageThisRound

    if (totalDamage >= 4) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
  }
  slaying = false; // To avoid infinite loop
}

 // First we use Math.random() to create a random number from 0 up to 1
 // Then we multiply by 5 to make the random number from 0 up to 5
 // Next we use Math.floor() to round DOWN to a whole number (Math.floor(2.5)=2)
 // Finally we add 1 to change the range from 0 to 4 to 1 and up/including 5
