//0.//
function challengeBanner(n){
    return '######### ' + 'Challenge ' + n +  ' #########';
      }
let result = challengeBanner(1);
console.log(result)

//1.//
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

//2.//
// function firstFiveVowels(str){
//     let i = 0;
//     while (i < str.length){
//     //How do we ask to identify the first 5 vowels of the word?
//     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
    
//     let specificChar = str[i]; //This stores the specific character into a variable
//     console.log(specificChar);
//     i = i + 1;
//     //
// firstFiveVowels('Regular expressions are for term 2.');

let result3 = challengeBanner(3);
console.log(result3)


//3.//
function everyThird(str){
    let i = 0;
    while (i < str.length){
    //How do we ask to identify every third character of the word?
    
    
    let specificChar = str[i]; //This stores the specific character into a variable
    console.log(specificChar);
    i = i + 3;
everyThird('I am the alfalfa and the omelette');
    }
}

