const newman = require('newman');

let collections = ['./collections/BookingPractice1.postman_collection.json','./collections/BookingPractice3.postman_collection.json', './collections/BookingPractice3.postman_collection.json', './collections/BookingPractice4.postman_collection.json', './collections/BookingPractice6.postman_collection.json'];
const env = require('./environments/BookingLive.postman_environment.json');

(function runCollection(i = 0) {
    newman.run({
        collection: collections[i],
        environment: env,
        reporters: ['cli', 'junit'],
        reporter: { junit : { export : './result.xml.xml' } },
        iterationCount: 1,
    }, function (err) {
        if(err){ throw err; }
        i++;
        if(i < collections.length){
            runCollection(i);
        }
        else{
            console.log("All Collections Run Complete!")
        }
    });
})();
