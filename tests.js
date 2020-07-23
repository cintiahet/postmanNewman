const newman = require('newman');
let collections = ['./BookingPractice1.postman_collection.json','./BookingPractice1.postman_collection.json','/BookingPractice2.postman_collection.json]', './BookingPractice3.postman_collection.json', './BookingPractice4.postman_collection.json', './BookingPractice6.postman_collection.json'];

(function runCollection(i = 0) {
    newman.run({
        collection: collections[i],
        reporters: 'cli',
        iterationCount: 1,
    }, function (err) {
        if(err){ throw err; }
        i++;
        if(i<collections.length){
            runCollection(i);
        }
        else{
            console.log("All Collections Run Complete!")
        }
    });
})();
