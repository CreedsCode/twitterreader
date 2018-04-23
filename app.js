var twit = require("twit");
var config = require("./config.js");
const say = require('say');
var fifo = require('fifo')();

var Twitter = new twit(config);

var work = false;
console.log(config.filter);
var Rueckgabe = 0;
													//Twitter Search Filter
var stream = Twitter.stream('statuses/filter', { track: config.filter })



stream.on('tweet', function (tweet) {
    //var fs = require('fs');
    //var json = JSON.stringify(tweet,null,2);
    //fs.writeFile("tweet.json",json);

    var absender = tweet.user.screen_name;
    console.log("Absender: " + absender);

    var nachricht = tweet.text;
    console.log("Nachricht: " + nachricht);

    var Rueckgabe = absender + "hat geschrieben" + nachricht;
    
    fifo.push(Rueckgabe);
    
    

});


setInterval(function(){ if(fifo.length > 0 && work == false){read();} }, 3000);
function read(){
    work = true
    say.speak(fifo.shift(), null, 1.0, (err) => {
        if (err) {
          return console.error(err)
        }
       
        console.log('Text has been spoken.')
        work = false;
      });
}
