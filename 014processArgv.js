console.log(process.argv);

const a = Number(process.argv[2]);
const b = Number(process.argv[4]);

const sign = process.argv[3];

if (sign === '+') {
  console.log(a + b);
} else if (sign === '*') {
  console.log(a * b);
}
