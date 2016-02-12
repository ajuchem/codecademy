```javascript
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit ();
rabbit1.adjective = 'fluffy'
rabbit1.describeMyself("I am a " + rabbit1.adjective + " rabbit");

var rabbit2 = new Rabbit ();
rabbit2.adjective = 'happy'
rabbit1.describeMyself("I am a " + rabbit2.adjective + " rabbit");

var rabbit3 = new Rabbit ();
rabbit3.adjective = 'sleepy'
rabbit1.describeMyself("I am a " + rabbit3.adjective + " rabbit");
```
