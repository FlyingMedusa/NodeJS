const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
  open() {
    this.emit('open');
  }

  close() {
    this.emit('close');
  }

  reserveTable() {
    this.emit('tableChange', -1);
  }

  cancelTableReservation() {
    this.emit('tableChange', 1);
  }

  takeTableWithoutReservation() {
    this.emit('tableChange', -1);
  }

  markTableAsBroken() {
    this.emit('tableChange', -1);
  }

  cleanupTable() {
    this.emit('tableChange', 1);
  }
}

module.exports = {
  Restaurant,
};
