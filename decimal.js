const base = 2;

const bits = [1, 1, 1, 0, 1, 1, 1];

let exponent = bits.length - 1;

let decimal = 0;

let positionValue = 0;

console.log(`bits: ${bits}\n`);

for (let i = 0; i < bits.length; i++) {
  console.log(`exponent: ${exponent}, value: ${bits[i]}`);

  positionValue = base ** exponent;

  console.log(`postion value: ${positionValue}`);
  console.log(`final bit value: ${bits[i] * positionValue}`);

  decimal = decimal + bits[i] * positionValue;

  console.log(`decimal: ${decimal}\n`);

  exponent--;
}

console.log(`decimal: ${decimal}`);
