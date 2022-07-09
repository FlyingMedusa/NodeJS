function calc(operation, num1, num2) {
    switch (operation) {
      case 'add':
        return `${num1 + num2}`;
      case 'subtract':
        return `${num1 - num2}`;
      case 'multiply':
        return `${num1 * num2}`;
      case 'divide':
        return `${num1 / num2}`;
      default:
        return 'operation is not supported';
    }
  }
  
  module.exports = {
    calc,
  };
  