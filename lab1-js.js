/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back  in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let number1 = 1;

// 2.) Change the value of this variable
number1 = 2;
// console.log(number);

// 3.) Change the data type of this variable
number1 = '3'
// console.log(typeof(number));

// 4.) Create another variable and the one from above to concatenate
let number2 = 5;
// console.log(number1 + number2);

// 5.) Use any of the variables above or create new ones and print using string interpolation
// console.log(`${number1}${number2}`)

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Susmita
let name = 'Susmita';
// console.log(name.charAt(4));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Ciera
let cieraString = "Ciera";
let unicodeValue = cieraString.charCodeAt(2);
console.log(unicodeValue);

// Using fromCharCode() - make it readable for us :). You'll see!
console.log(String.fromCharCode(unicodeValue));

// Take your first and last name and concat()
let firstName = 'yiwen';
let lastName = 'zhang';
// console.log(firstName + lastName);

// Create a string and make it return true using startsWith()
let string1 = 'Anything';
console.log(string1.startsWith('Any'));

// Now use any variable with endsWith() and return false
console.log(string1.endsWith('thin'));

// Finish the following sentence. Use includes() and return true.
let maireg = 'Once upon a time Maireg looked up at the Moon, '
console.log(maireg.includes('upon'));

// Help! I'm looking for my cow! Using indexOf() help Manny find his cow. What's the index of cow?
let mannyHadALittleLambOopsCow = "Manny lives in a farm. Manny was overwhelmed with coding. Manny is stressed out. Manny fed the chickens this morning and watered his plants. He took his cow Betsy on a walk. Manny went home without Betsy. Manny went to bed that night, and realized he left Betsy."
console.log(mannyHadALittleLambOopsCow.indexOf('cow'));

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien Ty in the String Universe.

let ty = "I am the Alpha Ty. I am the Omega Ty. We do not come in peace."
console.log(ty.lastIndexOf('Ty'))

// Can we use length for strings? I don't know, you tell me.
let noWeCantTeo = "but did you try it out though?"
console.log(noWeCantTeo.length);

// If only it was this easy to replace() my ex. LOL. JK
let replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
replaceGokuWithVegeta = replaceGokuWithVegeta.replace('Goku', 'Vegeta');
console.log(replaceGokuWithVegeta);

// Randi has been forgetful lately. Let's help Randi by using search(), and find their iPhone. 

let randiIsLookingForiPhone = "iphone 1, iPhone 2, IPHONE 3, ifone 4"
console.log(randiIsLookingForiPhone.search('iPhone'));

// I guess we can share this pizza sentence. Use slice() to return "other half of pizza".
let pizzaSentence = "pizza, other half of pizza"
console.log(pizzaSentence.slice(7))

// Now using the pizza sentence, return only pizza (before the comma)
console.log(pizzaSentence.slice(0,5))

// Okay, but who decided to go to this expensive restaurant? Brittany, Andrew, and Rockelle decided to split() the bill. Return an array separating Brittany, Andrew, and Rockelle.
let splitTheBill = "Brittany Andrew Rockelle";
console.log(splitTheBill.split(' '));

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Brittany, Andrew, and Rockelle into pieces. Using splitTheBill, return an array separating all three by single characters. "B, r, i, ..."
console.log(splitTheBill.split(''));

// Use this toLowerCase()
let angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
console.log(angry.toLowerCase());

// Michael was angry today. Create a string with words that Michael would yell out. Now lowercase it, to tell Micahel to chill out. 
let Michael = 'I CANNOT BELIEVE I GOT 0/250 ON THE TEST!';
console.log(Michael.toLocaleLowerCase());

// toUpperCase()
let coreySaidToPutSomeRespectToHisName = "corey feder"
console.log(coreySaidToPutSomeRespectToHisName.toUpperCase());

// substring()
// on the chopping block...

// Returns "ell"
let basicGreeting = "Hello World"
console.log(basicGreeting.substring(1,4));

// Returns "JavaScript"
let ohReally = "JavaScript Substring"
console.log(ohReally.substring(0,10));

// Returns aol.com
let aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.substring(15));

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
let whitespace = '             This is no extra whitespace.          ';
let trimWhitespace = whitespace.trim();
console.log(trimWhitespace);

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Suresh"

console.log(a < b)
console.log(c > b)
console.log(d == d)
console.log(d != a)
console.log(a < 15)
console.log(a < b < c)
console.log(c > b && a != d)