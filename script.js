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
  orderFood: function ({ addres, time = 20, starterIndex=2, mainIndex = 1 }) {
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


///for of loop in array[value,key,entries]//////
const finalMenue=[...resturant.starterMenue,...resturant.mainMenue];
for(const [i,el] of finalMenue.entries()) {
    console.log(`${i+1}: ${el}`);
}
console.log(finalMenue);

console.log('----------for of loop on objects-----------------');

for(const [day,{open,close}] of Object.entries(resturant.openingHour)) {
    console.log(`we are open on ${day} at ${open} and will close at ${close}`)
}


//////optional chaining/////////////////

resturant.orderFood?.({addres:'ali baba chowk'}) ?? 'this not exist';

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
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal
 number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to 
calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT:
 Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as
 properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

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


console.log('---------------practice soccor game----------------------');

// 1. Loop over the game.scored array and print each player name to the console, along with the goal
//  number (Example: "Goal 1: Lewandowski")

const goalList=game.scored;
console.log(goalList)
for(const [i,player] of goalList.entries()){
    console.log(`Goal ${i+1}: ${player}`);
}

const playerObj={};
for(const [i,player] of goalList.entries()){
//console.log(`${player}: ${i}`)
playerObj[player]=`${i+1}`
console.log(playerObj)
}
//console.log(playerObj)
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to 
// calculate averages, you can go check if you don't remember)
let sum=0;
const odd=Object.values(game.odds);

for(const y of odd){
    sum+=y;
   
};
const avgOfOdds=sum/odd.length;
console.log(avgOfOdds)
 

// . Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT:
//  Note how the odds and the game objects have the same property names 😉


for(const [team,odd] of Object.entries(game.odds)){
    const strTeam=team==='x'?'draw':`victory ${game[team]}`;
    console.log(`odd of ${strTeam}:  ${odd}`)
}


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



console.log('-------------Maps----------------');
const question=new Map([
  ['question','Which country has Space technology'],
  [1,'USA'],
  [2,'China'],
  [3,'Russia'],
  ['correct',2],
  [true,'correct'],
  [false,'Try again']
])

console.log(question);
console.log(question.get('question'));
for(const [key,val] of question){
  if(typeof key === 'number')console.log(`Answer ${key} : ${val}`)

}

//const answer= Number(prompt('Give your Answer'));
const answer=2;
console.log(question.get('correct')===answer)

console.log('-------------Coding Challange 3');

// /* 
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair.
// So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 
//9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half
// or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL



const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

gameEvents.delete(64);
console.log(gameEvents);

const time=[...gameEvents.keys()].pop();
console.log(`An event happend, on average, every ${time/gameEvents.size} minutes`);


const newGameEvents= new Set(gameEvents.values());
console.log(newGameEvents)

for (const [time,event] of gameEvents){
 const half=time <=45?'FIRST':'Second';
 console.log(`[${half}HALF] ${time} : ${event}`)
}


//Higher order functions

console.log('-------Higher Order Functions-------------');

function oneWord(str){
  return str.replace(/ /g,'').toLowerCase();
};
function upperFirstWord(str){
  const [first, ...others]=str.split(' ');
  return [first.toUpperCase(), ...others].join(' ')
};

function transformer(str,fn){
  console.log(`Orginal string :${str}`);
  console.log(`Transfered string : ${fn(str)}`);
  console.log(`Transfered by :${fn.name}`)

}
transformer('Java is the well language',upperFirstWord)
