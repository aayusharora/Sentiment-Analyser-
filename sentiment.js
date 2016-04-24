var sentiment = require('sentiment');
var prompt = require('prompt');

prompt.start();

prompt.get(['sentiment'], function (err, result) {
    // 
    // Log the results. 
    // 
 var r1 = sentiment(result.sentiment);
console.dir(r1);        // Score: -2, Comparative: -0.666

       // Score: 4, Comparative: 1   
});

