/*jshint multistr:true */

text = "In pure awesomeness, Allie learned Javascript with Codecademy. Allie now wants to learn JQuery. Way to go, Allie!";

var myName = "Allie";
var hits = []; // empty array for later

// look for "A" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "A") {
		// if we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]); // add strings to end of array
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}
