'use strict';



 






const lufthansa={
  airline:'Lufthansa',
  iataCode:'LH',
  bookings:[],
  book(flightNum,name){
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
    
    this.bookings.push({flight :`${this.iataCode}${flightNum}`,name})
  },
 

}

lufthansa.book(23,'Talha Rasool');
lufthansa.book(244,'hmaza munir');
console.log(lufthansa);

const eurowings={
  airline:'Eurowings',
  iataCode:'EW',
  bookings:[],
};

lufthansa.book.call(eurowings,777,'Zain');
console.log(eurowings);

const swiss={
  airline:'Swiss Air lines',
  iataCode:'LX',
  bookings:[],
};

lufthansa.book.call(swiss,879,'zainab');
console.log(swiss);

//bind method returns fn instead of calling as call method did;
const bookLH= lufthansa.book.bind(lufthansa);
const bookEW= lufthansa.book.bind(eurowings);
const bookLX= lufthansa.book.bind(swiss);
bookEW(444,'Munir Ahmed');










function oneWord(str){
  return str.replace(/ /g,'').toLowerCase();
};

function upperFirstWord(str){
  const[first,...others] =str.split(' ');
  return [first.toUpperCase(),...others].join(' ');
};
//console.log(upperFirstWord('Javascript is the best'));

function transformer(str,fn){
  console.log(`Orginal str : ${str}`)
console.log(`Transfored str: ${fn(str)}`);
console.log(`Transformed by: ${fn.name}`);
}
transformer('Javascript is the best',upperFirstWord);
transformer('GO Lang is the best',oneWord);

function DTicket(str){
  
  const[first,...others] =str.split(' ');
  return [first.padEnd(20,'*')].join(' ');

};

function orderDTicket(str,fn){
  console.log(`Your DTicket is here: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`)

};
orderDTicket('15',DTicket);
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('/n');
  console.log(rows);

  for(const row of rows){
    const[first,second]=row.toLowerCase().trim().split('_');
    const output=`${first}${second.replace(second[0],second[0].toUpperCase())}`;
    console.log(output);

   
  };
  


});




const airline='TAP Air Sial';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix captilization

const passenger='tAlhA';
const passengerLower=passenger.toLowerCase();
const passengerCorrect=passenger[0].toUpperCase()+passengerLower.slice(1);
console.log(passengerCorrect);

//replacing

const PK='299.22%';
const euro=PK.replace('.',',').replace('%','$');
console.log(euro);

const announcement='All passengers come to door 21,come to door 21';
console.log(announcement.replaceAll('door','gate'));

//practice

function checkBaccage(items){
  const baggage=items.toLowerCase();
  if(baggage.includes('knife')|| baggage.includes('gun')){
    console.log('You are not allowed to board')
  }else{
    console.log('Welcome on aboard')

  }

};

checkBaccage('I have laptop, some Food and a Knife');
checkBaccage('I have my tablet and some snacks');
checkBaccage('I have my gun for protection');


//split and join

console.log('talha rasool'.split(' '));
const[firstName,LastName]='talha rasool'.split(' ');
const newName=['Mr',firstName,LastName.toUpperCase()].join(' ');
console.log(newName);

function capitilizeName(name){
  const names=name.split(' ');
  const nameUpper=[];

  for(const n of names){
    //nameUpper.push(n[0].toUpperCase() + n.slice(1))
    nameUpper.push(n.replace(n[0],n[0].toUpperCase()))
    
  };
  console.log(nameUpper.join(' '));

  
  
  

};

capitilizeName('muhammad hamza munir');
capitilizeName('talha rasool');


function maskCreditCard(number){
  const str=number + '';
  const last=str.slice('-3');
  return last.padStart(str.length,'*');

};

console.log(maskCreditCard(37474777));
console.log(maskCreditCard('212873848837483'));
console.log(maskCreditCard(363824934378733434));

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
// Let's continue with our football betting app! This time, we have a map with a log of the
// events that happened during the game. The values are the events themselves, and the keys are 
 //the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)

const events=new Set(gameEvents.values());

const eventsArr=[...events];

console.log(events);
console.log(eventsArr);
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. 
// So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);


// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" 
// (keep in mind that a game has 90 minutes)

console.log(`An event happend, on average, every ${90/gameEvents.size}`);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or
//  second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

for(const[min,value] of gameEvents){
  // if(key <=45){
  //   console.log(`[FIRST HALF]${key}: ${value}`)
  // }else{
  //   console.log(`[SECOND HALF]${key}: ${value}`)
  // }
  const half= min <= 45? 'FIRST':'SECOND';
  console.log(`[${half} HALF] ${min}: ${value}`);

};

// GOOD LUCK 😀
// */


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ind1, ind2, ind3) {
    console.log(`Your pasta is ready with ${ind1} , ${ind2}, ${ind3} `);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const question = new Map([
  ['question', 'Which is the most popular programming language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Sucess'],
  [false, 'Wrong'],
]);

console.log(question);

//quiz app;


console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`option ${key} is ${value}:`);
}
//const answer=Number(prompt('Your Answer'));
console.log(answer);


const correctAns=question.get(true);
const WrongAns= question.get(false);
const answ=question.get('correct');

 if(answer === answ){
  console.log(correctAns);
 }else{
  console.log(WrongAns)
 }
 





//
const properties = Object.keys(restaurant.openingHours);

for (const day of properties) {
  console.log(day);
}

const entries = Object.entries(restaurant.openingHours);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close ${close}`);
}

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//

for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el} `);
}

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'not our shop';
  console.log(`On ${day} we open at ${open}`);
}

const ingredents = [
  // prompt("lets make a pasta Ingredents1"),
  // prompt('Ingredents2'),
  // prompt('Ingredents3'),
];

//restaurant.orderPasta(...ingredents);

const arr = [2, 4, 6];

const [first, , second] = arr;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

//Another use case
//if method return an arry-- can destruct result into-- diferent variable;
const [starterCourse, mainCourse] = restaurant.order(2, 0);

console.log(starterCourse, mainCourse);

//nested destructuring

const nested = [2, 4, [5, 6]];
const [i, , [j, r]] = nested;
console.log(i, j, r);

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

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the
 goal number (Example: "Goal 1: Lewandowski")

 
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored 
as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }






const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];




//Destructure the keywords property (array) of the first book from the books array into variables 
//called mainKeyword and rest. The first keyword should be assigned to mainKeyword, 
//and the rest of the keywords should be assigned to the rest variable (it should be an array).


const{mainKeyword,...rest}=books[0].keywords;
console.log(mainKeyword,rest);


//Destructure the second book from the books array into a variable called bookPublisher.
// The bookPublisher variable should be assigned with the value of the publisher 
//property of the book object. Assign the rest of the properties to the restOfTheBook variable

const {bookPublisher:publisher, ...restOfTheBook} = books[1];
console.log(publisher,restOfTheBook);

//Write a function called printBookAuthorsCount that has two parameters called title and authors.
// The authors parameter should accept any number of arguments. This function should log to the
// console a string formatted like that:
// "The book "${title}" has ${authors.length} authors".

function printBookAuthorsCount(title,...authors){
  // let count=0;
  // for(let i=0; i<authors.length; i++)
  // count +=authors[i];
console.log(`the book ${title} has ${authors.length}`)
// return count;

};

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne','Talha','hamza');


//Destructure the first book object from the books 
//array into variables called title, author and ISBN.

const{title,author,ISBN}=books[0];
console.log(title,author,ISBN);


//Each book object has the author property, which stores an array of strings (author names)
// if there are multiple authors,
// or a single string (author name) if there is just one author.
//Declare an array called bookAuthors, and fill it with authors of the first two books from
// the books array. The bookAuthors array should have just one level (no nested arrays).
const{author:book1}=books[0];
const{author:book2}=books[1];

const bookAuthors=[...book1,...book2];
console.log(bookAuthors);


//Write a function called spellWord that accepts a single string as an argument. 
//This function should log to the console each letter of the argument separated by a space.

function spellWord(strg){
  console.log(...strg);

}

spellWord('JavaScript')

// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

//Write a function called printBookInfo that has three parameters called title,
// author and year. This function should work for a single object passed as an argument,
// and it should log to the console information about the book in this format: "${title} 
//by ${author}, ${year}".
//If year is undefined (was not passed), it should be assigned with 
//a default value of 'year unknown'.

function printBookInfo({titleName,authorName,year='unknow Year'}){

  console.log(`${titleName} by ${authorName} , in ${year}`)
  return;
};

printBookInfo({
  titleName:'Algorithms',
  authorName:'Robert Sedgewick',
  
});

//printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });

//Each book object has the keywords property. Destructure the first book object from the books
// array into a variable called tags.
// The tags variable should be assigned with the value of the keywords property.

const{keywords:tags}=books[0];
console.log(tags);


//The seventh book from the books array is missing the programmingLanguage property. 
//Destructure the seventh book object (books[6]) into variables called language and 
//programmingLanguage.
// Assign the programmingLanguage variable with a default value of 'unknown'


const{language,programmingLanguage='unknown'}=books[6];
console.log(language,programmingLanguage);



//Below are two variables called bookTitle and bookAuthor. 
//Reassign them with the values of the title and author properties of the first book object
// from the books array.

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

//mutating objectDes;

({bookTitle=title, bookAuthor=author}=books[0])
//console.log(bookTitle,bookAuthor);

//Destructure the first book object from the books array into a variable called bookRating.
// In the result of your destructuring, the bookRating variable should be assigned with the 
//value of the book[0].thirdParty.goodreads.rating property.
//Please do most of the work on the left side of the assignment operator: const ... = books[0];


const{thirdParty:{goodreads:{rating:bookRating}}}=books[0];
console.log(bookRating);



//Destructure the books array into two variables called firstBook and secondBook.

const [firstBook,secondBook]=books;

//Destructure the books array into a variable called thirdBook.
// You must skip the first two books.

const[  ,   , thirdBook]=books;

//Below is the nested ratings array that contains two other arrays.
// Destructure the nested ratings arrays into two variables called rating and ratingsCount.
// In the result of your destructuring, the ratings variable should store a number 4.19, 
//and the ratingsCount variable should store a number 144584.

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

const [[ , rating],[  , ratingsCount]]=ratings;

console.log(rating, ratingsCount);

//Below is the ratingStars array.
// Destructure it into three variables called fiveStarRatings,
// oneStarRatings and threeStarRatings. Assign the threeStarRatings variable
// with a default value of 0.

const ratingStars = [63405, 1808];
const[fiveStarRatings,oneStarRatings,threeStarRatings=0]= ratingStars;

console.log(fiveStarRatings,oneStarRatings,threeStarRatings);





// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the
 goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }




//We're building a football betting app (soccer for my American friends 😅)!

//Suppose we get data from a web service about a certain game (below).
// In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')

const[player1,player2]=game.players;
console.log(player1);
console.log(player2);


// 2. The first player in any player array is the goalkeeper and the others are field players.

const[gk,...fieldPlayers]=player1;
console.log(gk,fieldPlayers);
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, 
//and one array ('fieldPlayers') with all the remaining 10 field players


// 3. Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers=[...player1,...player2];
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new 
//array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho'
// and 'Perisic'

const players1Final=[...player1,'Thiago','Coutinho','Perisic'];
console.log(players1Final)

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' 
//and 'team2')

const{odds:{team1,x:draw,team2}}=game;
console.log(team1,draw,team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names
// (NOT an array) and prints each of them to the console, along with the number of goals
// that were scored in total (number of player names passed in)

function printGoals(...playerName){
  console.log(`${playerName.length} goals were scored`);

};

printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich');
printGoals('Davies', 'Muller', 'Lewandowski');
printGoals(...game.scored);


// 7. The team with the lower odd is more likely to win. Print to the console which team is
// more likely to win, WITHOUT using an if/else statement or the ternary operator.

team1 < team2 && console.log('Team 1 is likely to win');

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then,
// call the function again with players from game.scored*/
