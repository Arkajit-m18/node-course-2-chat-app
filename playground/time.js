var moment = require('moment');

// Jan 1st 1970 00:00:00 am
// Timestamps will be used in milliseconds

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();

// date.add(2, 'year').subtract(10, 'months');
// console.log(date.format('MMM Do, YYYY'));

//10:35 am
//6:01 pm

// console.log(date.format('hh:mm a'));
// console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));