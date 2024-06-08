'use strict';

//loops

for (let i = 0; i <= 10; i++) {
  console.log(`lifting the weights ${i} times`);
}

const talha = ['talha', 'Augsburg', 23, 'Vollyball', true];

const newTalha = [];

for (let i = 0; i < talha.length; i++) {
  if (typeof talha[i] !== 'string') continue;
  if (typeof talha[i] === 'number') break;
  console.log(talha[i], typeof talha[i]);
  newTalha.push(typeof talha[i]);
}
console.log(newTalha);
