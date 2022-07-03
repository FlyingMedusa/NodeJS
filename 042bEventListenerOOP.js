const { TickTock } = require('./interval2');

new TickTock()
  .once('secondElapsed', (data) => {
    console.log('Hello!', data);
  })
  .on('secondElapsed', () => {
    console.log('1sec!');
  })
  .on('threeSecondsElapsed', () => {
    console.log('3secs!');
  });
