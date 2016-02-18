/* MAKE ADDRESSBOOK */

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

/* ADD ADITIONAL ENTRIES */
function add(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
    };
}
add("Allie", "Daudt", "me@here.com", "(123) 456-7890");

// list();

/* PRINT PERSON FIRST AND LAST NAME */
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}


/* LIST OF PERSON INFO */
function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/* SEARCH FUNCTION */
function search(lastName) {
    var contacLength = contacts.length;
    for (var i =0; i < contacLength; i++) {
        if (lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        };
    };

}

// search("Jones");
