function calc(operation, num1, num2) {
    if (operation === 'add') {
      return `${num1 + num2}`;
    } if (operation === 'subtract') {
      return `${num1 - num2}`;
    } if (operation === 'multiply') {
      return `${num1 * num2}`;
    } if (operation === 'divide') {
      return `${num1 / num2}`;
    }
  }
  
  module.exports = {
    calc,
  };
  