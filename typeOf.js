var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for(var i in languages) {
    if (typeof languages[i] === 'string') {
        console.log(languages[i]);
    }
}
