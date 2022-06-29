const buff = Buffer.alloc(20);

buff.write('Hello, World!', 'utf8');

console.log(buff);
console.log(buff.toString('hex'));
console.log(buff.toString('utf8'));

console.log(Buffer.byteLength('a', 'utf8'));
console.log(Buffer.byteLength('ą', 'utf8'));
console.log(Buffer.byteLength('❤', 'utf8'));
console.log(Buffer.byteLength('夢', 'utf8'));

const buff1 = Buffer.from('Pięć gęsi ❤');

console.log(buff1);
console.log(buff1.toString('utf8'));
console.log(buff1.length);

const buff2 = Buffer.from([1, 2, 3, 4]);

console.log(buff2);
console.log(buff2.toString('utf8'));
console.log(buff2.length);

