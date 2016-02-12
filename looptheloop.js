// Our Person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("Alice", 40);
family[1] = new Person("Bob", 42);
family[2] = new Person("Michelle", 8);
family[3] = new Person("Timmy", 6);

// Loop through our new array to print each family name (and I added their age)
for (var i = 0; i < family.length; i++) {
    console.log("My name is " + family[i].name + " and I am " + family[i].age +
    " years old.");
}
