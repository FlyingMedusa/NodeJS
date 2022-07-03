const { tickTock } = require('./interval2');

const events = tickTock();

events
  .once('secondElapsed', (data) => {
    console.log('Hello!', data);
  })
  .on('secondElapsed', () => {
    console.log('1sec!');
  })
  .on('threeSecondsElapsed', () => {
    console.log('3secs!');
  });
