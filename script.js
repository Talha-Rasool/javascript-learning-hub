'use strict';

//loops

for (let i = 0; i <= 10; i++) {
  console.log(`lifting the weights ${i} times`);
}

const talha = ['talha', 'Augsburg', 23, 'Vollyball', true];

const newTalha = [];

for (let i = 0; i < talha.length; i++) {
  if (typeof talha[i] !== 'string') continue;
  console.log(talha[i], typeof talha[i]);
  newTalha.push(typeof talha[i]);
}

//break
console.log('-------break------');
for (let i = 0; i < talha.length; i++) {
  if (typeof talha[i] === 'number') break;
  console.log(talha[i]);
}
console.log(newTalha);
//election assignment

for (let i = 0; i < 50; i++) {
  console.log(`Voter number 1 is currently voting`);
}

//////////

const population = [24, 8, 202, 1441];
if (population.length === 4) {
  console.log(true);
} else {
  console.log(false);
}

function percentageOfWorld(pop) {
  const population = [];
  for (let i = 0; i < pop.length; i++) {
    const ppl = (pop[i] / 7900) * 100;
    population.push(ppl);
  }
  return population;
}

console.log(percentageOfWorld(population));

///loop in loop

for (let p = 0; p <= 1; p++) {
  //console.log('parent  has costed his vote!');

  for (let childs = 0; childs <= 3; childs++) {
    //console.log('child  have also casted his Vote');
  }
}

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  //console.log(listOfNeighbours[i])

  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    //console.log(`Neighbour ${listOfNeighbours[i][y]}`)
  }
}

/////Tip Calcution for a resturant//////

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totalAmount = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.12;
}

console.log(calcTip(56));

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  const total = tip + bills[i];
  totalAmount.push(total);
  
}
console.log(totalAmount,tips)

function calcAvg(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=+arr[i];
    }
    return sum/arr.length;
}

calcAvg(bills)

///Destructring arrays

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

const[[,rating],[,ratingCount]]=ratings;
console.log(rating,ratingCount)

const ratingStars = [63405, 1808];
const[fiveStarRatings=0,oneStarRatings=0,threeStarRatings=0]=ratingStars;
console.log(fiveStarRatings,oneStarRatings,threeStarRatings)


