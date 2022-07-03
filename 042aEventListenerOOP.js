const { EventEmitter } = require('events');

class TickTock extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('secondElapsed', 'Test');
    }, 1000);

    setInterval(() => {
      this.emit('threeSecondsElapsed');
    }, 3000);
  }
}

module.exports = {
  TickTock,
};
