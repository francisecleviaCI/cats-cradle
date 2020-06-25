const { thisExpression } = require("@babel/types");

//0.//
function challengeBanner(n){
    return '######### ' + 'Challenge ' + n +  ' #########';
      }
let result = challengeBanner(1);
console.log(result)

//1.//SUCCESS!!
function printsOutVowels(str){
let i = 0;
while (i < str.length){
    i = i + 1;
        //How do we ask to identify the vowels of the word?
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            
    let specificChar = str[i]; //This stores the specific character into a variable
    console.log(specificChar);
      
}
}
}
printsOutVowels('Regular expressions are for term 2.');


let result2 = challengeBanner(2);
console.log(result2)

//2.//***************** */
function firstFiveVowels(str){
    let i = 0;
    while (i < str.length){
    i = i + 1;
    //How do we ask to identify the first 5 vowels of the word? I don't know.
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
    
    let specificChar = str[i]; 
    console.log(specificChar);
    
}
    }
}
firstFiveVowels('Regular expressions are for term 2.');

let result3 = challengeBanner(3);
console.log(result3)


//3.///How do we ask to identify every third character of the word?
function everyThird(str){
let i = 2;
while (i < str.length){
    let specificChar = str[i]; 
    console.log(specificChar);
i = i + 3;
    
    

}
}
everyThird('I am the alfalfa and the omelette');


let result4 = challengeBanner(4);
console.log(result4)

//4.//It works, but doesn't stop after the four digits.
function firstFourCharacters(str){
    let i = 3;
    while (i < str.length){
    i = i + 1;

  
    
let specificChar = str[i]; 
console.log(specificChar + str[i+1], str[i+2], str[i+3]);
    
}
}

firstFourCharacters("Oh hi, I didn't see you there. Welcome.");

let result5 = challengeBanner(5);
console.log(result5)

//5.//SUCCESS!
function printOutU(str){
    let i = 0;
    while (i < str.length){
    i = i + 1;
    if (str[i] === 'u')
    console.log(i);
    
}
    }

printOutU("You picked the wrong house, bub.");

let result6 = challengeBanner(6);
console.log(result6)

//6.//How do you print out just the first U?
function printOutFirstIndexU(str){
    let i = 0;
    while (i < str.length){
    i = i + 1;
    if (str[i] === 'u') break;
    console.log(i);
    

}
}

printOutFirstIndexU("You picked the wrong house, bub.");

let result7 = challengeBanner(7);
console.log(result7)

//7.//Got the -1 to print out, but not a single 2.
function printOutIndexU(str){
    let i = 0;
    while (i < str.length){
    i = i + 1;
const phrase = 'u'
if (str[i] === 'u'){
    console.log(i);
} else if (str[i] !== 'u') {
    console.log(-1);
}


}
}
const phrase = printOutIndexU("I'm Canadian");
