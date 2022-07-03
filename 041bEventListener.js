const { tickTock } = require('./interval2');

const events = tickTock();

events.once('secondElapsed', (data) => {
  console.log('Hello!', data);
});

events.on('secondElapsed', () => {
  console.log('1sec!');
});

events.on('threeSecondsElapsed', () => {
  console.log('3secs!');
});
