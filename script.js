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
console.log(totalAmount, tips);

function calcAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = +arr[i];
  }
  return sum / arr.length;
}

calcAvg(bills);

///Destructring arrays

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingCount]] = ratings;
console.log(rating, ratingCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] =
  ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

//////Object Destructring/////

const resturant = {
  name: 'geschmak',
  owner: 'talha',
  starterMenue: ['Pizza', 'Jogart', 'Coke'],
  mainMenue: ['Chicken', 'Rice', 'Beef'],
  openingHour: {
    fri: {
      open: 16,
      close: 23,
    },
    sat: {
      open: 12,
      close: 22,
    },
  },
  orderFood: function ({ addres, time = 20, starterIndex, mainIndex = 1 }) {
    console.log(
      `your order is delieveed to ${addres} will arrive at ${time} includes ${this.starterMenue[starterIndex]} and ${this.mainMenue[mainIndex]}`
    );
  },
  orderLaptop: function (laptCompany, laptModel) {
    console.log(
      `Good New :Your order of ${laptCompany} with ${laptModel} is dispacted`
    );
  },
};



const orderDetail = [
//   prompt('lets order your new Gagdte ! laptop model'),
//   prompt('laptop company'),
];
console.log(orderDetail)

resturant.orderLaptop(...orderDetail)

resturant.orderFood({
  addres: 'romerstadter street 2',
  time: 22,
  starterIndex: 2,
  mainIndex: 2,
});
resturant.orderFood({
  addres: 'romerstadter street 2',
  starterIndex: 2,
});

const [main, , secondary] = resturant.starterMenue;
console.log(main, secondary);

const { name: resturantName } = resturant;
const {
  sat: { open: o, close: c },
} = resturant.openingHour;
console.log(o, c, resturantName);

const newResturant = { ...resturant };
newResturant.name = 'burger king';
console.log(resturant);
console.log(newResturant);

const finalMenue=[...resturant.starterMenue,...resturant.mainMenue];
for(const [i,el] of finalMenue.entries()) {
    console.log(`${i+1}: ${el}`);
}
console.log(finalMenue);

////rest pattern

const postion=['tal','zan','ham','joh','aur'];
const[a,b,j,...others]=postion;
console.log(a,b,j,others);

const{sat,...weekday}=resturant.openingHour;
console.log(sat,weekday)

function add(...numbers){
    
    let sum=0;
    for(let i=0;i<numbers.length;i++ ) {
        sum+=numbers[i];
     
        
    }
    console.log(sum)
    
    


}
add(2,4);
add(5,6,7,8);
add(8,5,4,2,1,7);

const x=[4,4,4,4];
add(...x)


const rest1={
    name:'Capri',
    numGuests:0,
}

const rest2={
    name:'La pizza',
    owner:'rana deen',
};

rest1.numGuests ??=10;
rest2.numGuests ??=10;

console.log(rest1,rest2)

rest1.owner=rest1.owner && 'ANONYMOUS'
rest2.owner &&='ANONYMOUS'
console.log(rest1,rest2);


/////Assignment /////

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array 
('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array 
('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and
 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
and prints each of them to the console, along with the number of goals that were scored in total 
(number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely 
to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function
 again with players from game.scored

GOOD LUCK 😀
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

  //1. Create one player array for each team (variables 'players1' and 'players2')
console.log('----------------------Assignment------------');
  const[players1,players2]=game.players;
  console.log(players1,players2)

//  2. The first player in any player array is the goalkeeper and the others are field players. 
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array 
// ('fieldPlayers') with all the remaining 10 field players

const[gk,...fieldPlayers]=players1;
console.log(gk,fieldPlayers)


// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array 
// ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const allPlayers=[...players1,...players2];
console.log(allPlayers)

const players1FinalBM=[...players1,'Thiago', 'Coutinho', 'Perisic'];

console.log(players1FinalBM);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and
//     'team2')

const{team1,x:draw,team2}=game.odds;
console.log(team1,draw,team2);
   

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
// and prints each of them to the console, along with the number of goals that were scored in total 
// (number of player names passed in)

function printGoals(...name){
    console.log(name)
const numbGoals=name.length;
console.log(`Total goal scored are ${numbGoals}`)
};

printGoals('ali','ronaldo');
printGoals('ali','ronaldo','zain');
printGoals('ali','ronaldo','zain','ali','ronaldo','zain')
printGoals(...game.scored);


// . The team with the lower odd is more likely to win. Print to the console which team is more likely 
// to win, WITHOUT using an if/else statement or the ternary operator.

team1 > team2 && console.log('Team 2 is most likely to win');
team2 > team1 && console.log('Team 1 is most likely to win');